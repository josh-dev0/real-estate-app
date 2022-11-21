import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import randomColor from "randomcolor";
import { request, gql } from "graphql-request";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

const loginDocument = gql`
  mutation login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      success
      errors
      unarchiving
      token
      refreshToken
      user {
        id
        username
        firstName
        lastName
        avatar
      }
    }
  }
`;

const registerDocument = gql`
  mutation register(
    $email: String!
    $username: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      email: $email
      username: $username
      password1: $password1
      password2: $password2
    ) {
      errors
      success
    }
  }
`;

type AuthCredentials =
  | Record<
      "username" | "password" | "remember" | "newsletter" | "identity" | "type",
      string
    >
  | undefined;

const login = async (credentials: AuthCredentials) => {
  const { identity } = credentials!;
  return request({
    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    document: loginDocument,
    variables: {
      username: credentials?.username,
      password: credentials?.password,
    },
  })
    .then((res) => res.tokenAuth)
    .then((res) => {
      if (!res.success) throw new Error(res.errors.nonFieldErrors[0].message);
      return {
        id: res.user.id,
        name: `${res.user.firstName} ${res.user.lastName}`.trim(),
        image: res.user.avatar,
        token: res.token,
        refreshToken: res.refreshToken,
        username: res.user.username,
        role: identity,
        backgrondColor: randomColor({ luminosity: "dark" }),
      };
    })
    .catch((err) => null);
};

const register = async (credentials: AuthCredentials) => {
  const { identity, username, password } = credentials!;
  return request({
    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    document: registerDocument,
    variables: {
      email: `temp.${Math.random() * Math.pow(10, 10)}@fake.com`, // generate fake email.
      username,
      password1: password,
      password2: password,
    },
  })
    .then((res) => res.register)
    .then((res) => {
      if (!res.success) throw new Error(res.errors.nonFieldErrors[0].message);
      return {
        token: res.token,
        refreshToken: res.refreshToken,
        role: identity,
      };
    })
    .catch((err) => null);
};

const authenticate = async (credentials: AuthCredentials) => {
  const { type } = credentials!;
  return (type === "login" ? login : register)(credentials);
};

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        remember: { label: "Rembmer me", type: "c" },
        newsletter: { label: "Register to our newsletter" },
        identity: { label: "Identity Type" },
        type: { label: "Login Type", type: "text" },
      },
      async authorize(credentials, req) {
        return authenticate(credentials)
          .then((user) => user as any)
          .catch(() => null);
      },
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    /**
     * @description `jwt` runs first, and then runs `session` callback next.
     * All useful data is from `user` param in `jwt` callback.
     */
    async session({ session, user, token }): Promise<Session> {
      return {
        ...session,
        token: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        user: {
          ...session.user,
          ...token.user,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        const { token: accessToken, refreshToken, ...userInfo } = user;
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
        token.user = userInfo;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
