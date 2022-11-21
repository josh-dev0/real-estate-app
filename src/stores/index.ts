import { atom, selector } from "recoil";
// import type { UserNode } from "@app/graphql/types";
import { User } from "next-auth";

export const jwtState = atom<string | undefined>({
  key: "jwt",
  default: "",
});

export const publicProfileState = atom<Partial<User> | null>({
  key: "profile",
  default: null,
});
