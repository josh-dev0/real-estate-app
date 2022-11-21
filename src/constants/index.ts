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

// use this constant to update the inner path dependency while navigating.
export const ROUTES = {
  login: "/identify",
  confirmEmail: "/confirm-email",
  info1: "/info",
  info2: "/more-info",
} as const;

export const QUERY = {
  justLoggedIn: "just",
} as const;
