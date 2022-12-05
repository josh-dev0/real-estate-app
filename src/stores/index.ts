import { atom, selector } from "recoil";
import { PublicUserProfile } from "next-auth";

export const jwtState = atom<string | null>({
  key: "jwt",
  default: null,
});

export const publicProfileState = atom<PublicUserProfile | null>({
  key: "profile",
  default: null,
});
