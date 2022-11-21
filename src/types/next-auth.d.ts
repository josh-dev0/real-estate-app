import NextAuth from "next-auth";
import type {
  User as NextAuthUser,
  Session as NextAuthSession,
} from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT as NAJWT } from "next-auth/jwt";

declare module "next-auth" {
  export interface Session extends NextAuthSession {
    token: string;
    refreshToken: string;
    user: {
      username: string;
      role: string;
      accessToken: string;
      name: string;
      avatar: string;
      backgroundColor: string;
      [key: string]: string;
    };
  }

  export interface PublicUserProfile {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    name: string;
    avatar: string;
    verified: boolean;
    role: string;
    backgrondColor: string;
  }

  export interface User extends NextAuthUser {
    token: string;
    refreshToken: string;
    profile?: PublicUserProfile;
  }
}

declare module "next-auth/jwt" {
  export interface JWT extends NAJWT {
    user: User;
  }
}
