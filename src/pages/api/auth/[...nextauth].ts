import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

const successEmail = "test@test.com";

type AuthCredentials =
  | Record<
      "username" | "password" | "remember" | "newsletter" | "identity" | "type",
      string
    >
  | undefined;

const fakeAuthApi = async (credentials: AuthCredentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!credentials) reject(new Error("No credentials passed!"));
      const { username, password, remember, newsletter, identity } =
        credentials!;

      resolve(
        username === successEmail
          ? {
              id: Math.ceil(Math.random() * 1000),
              name: "Josh",
              image: "https://i.pravatar.cc/300",
              token: "JWT_TOKEN_HERE",
              username,
              identity,
            }
          : null
      );
    }, 300);
  });
};

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  session: {},
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
        return fakeAuthApi(credentials)
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
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...token.user,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.id;
        token.user = user;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
