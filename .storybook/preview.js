import * as NextImage from "next/image";
import { ThemeProvider } from "next-themes";
import { AntdThemeConfig } from "../src/containers/AntdThemeConfig";

import "../src/styles/globals.scss";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <AntdThemeConfig>
        <Story />
      </AntdThemeConfig>
    </ThemeProvider>
  ),
];
