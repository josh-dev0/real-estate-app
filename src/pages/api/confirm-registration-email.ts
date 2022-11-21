import type { NextApiRequest, NextApiResponse } from "next";
import { ROUTES } from "@app/constants";
import { sleep } from "@app/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("confirm.registration.email.query", req.query);
  // TODO: process some verification.
  // finally redirect to login page.
  await sleep(1000);
  res.status(301).redirect(ROUTES.login);
}
