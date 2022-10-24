import { IDENTITY } from "@app/constants";

export type BreadcrumbItem = {
  name: string;
  link?: string;
};

export interface IUser {
  name: string;
  avatar: string;
}

type ReverseMap<T> = T[keyof T];

export type IdentityType = ReverseMap<typeof IDENTITY>;

export type IRange = {
  min?: number;
  max?: number;
};
