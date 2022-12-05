/** @type {import('next').NextConfig} */
const path = require("path");
const intercept = require("intercept-stdout");

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles"),
      path.join(__dirname, "src/components"),
    ],
  },
};

module.exports = nextConfig;
