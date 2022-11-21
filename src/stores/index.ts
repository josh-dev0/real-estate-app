import { atom, selector } from "recoil";
// import type { UserNode } from "@app/graphql/types";
import { PublicUserProfile } from "next-auth";

export const jwtState = atom<string | null>({
  key: "jwt",
  default: null,
});

export const publicProfileState = atom<PublicUserProfile | null>({
  key: "profile",
  default: null,
});
