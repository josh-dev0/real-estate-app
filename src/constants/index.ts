export const IDENTITY = {
  INDIVIDUAL: "individual",
  PROFESSIONAL: "professional",
} as const;

export const AUTH_TYPE = {
  LOGIN: "login",
  REGISTER: "register",
} as const;

export const SESSION_STATUS = {
  AUTHENTICATED: "authenticated",
  LOADING: "loading",
  UNAUTHENTICATED: "unauthenticated",
};
