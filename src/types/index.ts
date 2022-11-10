import { IDENTITY, AUTH_TYPE } from "@app/constants";
import { ReverseMap } from "./general";

export type BreadcrumbItem = {
  name: string;
  link?: string;
};

export interface IUser {
  name: string;
  avatar: string;
}

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

export type AuthType = ReverseMap<typeof AUTH_TYPE>;

export type LoginInput = {
  username: string;
  password: string;
  remember: boolean;
};

export type RegisterInput = {
  newsletter: boolean;
} & LoginInput;

export type ValidateResult = {
  hasFeedback?: boolean;
  validateStatus: "warning" | "success" | "error" | "validating";
  help?: string;
};

export type Agency = {
  id: string;
  name: string;
  avatar?: string;
  companyName: string;
  country: string;
  street: string;
  address2: string;
  phone: string;
  website: string;
  companyType: string;
  title: string;
  description: string;
  rate: number;
};
