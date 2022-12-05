import type { NextApiRequest, NextApiResponse } from "next";
import { request } from "graphql-request";
import { ROUTES } from "@app/constants";
import { VerifyAccountDocument } from "@app/graphql/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;
  return request({
    url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    document: VerifyAccountDocument,
    variables: {
      token,
    },
  })
    .then((res) => res.verifyAccount)
    .then((res) => {
      if (res.errors) {
        const keys = Object.keys(res.errors);
        throw new Error(res.errors[keys[0]][0].message);
      }
      return res.status(301).redirect(ROUTES.login);
    })
    .catch((err) => {
      return res.status(400).send(err.message);
    });
}
