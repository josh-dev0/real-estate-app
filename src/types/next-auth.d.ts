import NextAuth from "next-auth";
import type { User as NextAuthUser, Session as NaSession } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT as NAJWT } from "next-auth/jwt";

declare module "next-auth" {
  export interface Session extends NaSession {
    user: {
      username: string;
      role: string;
      accessToken: string;
      name: string;
      avatar: string;
      [key: string]: string;
    };
  }

  export interface User extends NextAuthUser {
    [key: string]: string;
  }
}

declare module "next-auth/jwt" {
  export interface JWT extends NAJWT {
    user: User;
  }
}
