import { ValidateResult } from "@app/types";

const successResult: ValidateResult = {
  validateStatus: "success",
  hasFeedback: true,
  help: "",
};

const errorResultTemplate: ValidateResult = {
  hasFeedback: true,
  validateStatus: "error",
  help: "",
};

export const validatePassword = (password: string): ValidateResult => {
  if (!password)
    return { ...errorResultTemplate, help: "Password must not be empty!" };
  if (password.length < 8)
    return {
      ...errorResultTemplate,
      help: "Should be 8 alphanumeric characters minimum",
    };
  if (!/[a-zA-Z]/.test(password))
    return {
      ...errorResultTemplate,
      help: "Should include at least 1 letter",
    };
  if (!/[0-9]/.test(password))
    return {
      ...errorResultTemplate,
      help: "Should include at least 1 number",
    };
  if (!/\W|_/g.test(password))
    return {
      ...errorResultTemplate,
      help: "Should include at least 1 special character",
    };
  return { ...successResult, hasFeedback: false };
};

// TODO: update this validate by integrating API.
export const validateUsernameOnServer = async (
  username: string
): Promise<ValidateResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usernameAvailable = Math.random() > 0.5;
      resolve(
        usernameAvailable
          ? successResult
          : { ...errorResultTemplate, help: "Username already exist!" }
      );
    }, 500); // assumes that API responds after 500ms.
  });
};

export const validateUsername = async (
  username: string
): Promise<ValidateResult> => {
  if (!username)
    return { ...errorResultTemplate, help: "Username must not be empty!" };
  if (username.length < 3)
    return {
      ...errorResultTemplate,
      help: "Should be 8 alphanumeric characters minimum",
    };
  if (username.length > 50)
    return {
      ...errorResultTemplate,
      help: "Should be 50 alphanumeric characters maximum",
    };

  return { ...successResult, hasFeedback: false };
};
