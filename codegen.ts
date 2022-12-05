import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/types.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
