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
    role?: string; // for registration only
    email?: string; // for registration only
    user: PublicUserProfile;
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
    backgroundColor: string;
  }

  export interface User extends NextAuthUser {
    token: string;
    refreshToken: string;
    role?: string; // for registration only
    email?: string; // for registration only
    profile?: PublicUserProfile;
  }
}

declare module "next-auth/jwt" {
  export interface JWT extends NAJWT {
    user: User;
    role?: string;
    email?: string;
  }
}
