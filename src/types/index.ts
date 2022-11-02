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

export type ICountry = {
  name?: string;
  code: string;
  flag: string;
};

export type LoginInput = {
  username: string;
  password: string;
  remember: boolean;
};

export type ValidateResult = {
  hasFeedback?: boolean;
  validateStatus: "warning" | "success" | "error" | "validating";
  help?: string;
};
