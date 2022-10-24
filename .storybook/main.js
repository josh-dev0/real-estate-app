const path = require("path");

module.exports = {
  stories: [
    "../src/_stories_/**/*.stories.mdx",
    "../src/_stories_/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/preset-scss",
    {
      /**
       * Fix Storybook issue with PostCss@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(css|scss)$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1, // We always need to apply postcss-loader before css-loader
            modules: {
              auto: /(?<!variables)\.module\.scss$/, // true
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: "postcss-loader", // required for tailwind
          options: {
            implementation: require("postcss"), // postcss 8
            postcssOptions: {
              config: path.resolve(__dirname, "../postcss.config.js"),
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            // sourceMap: true,
            // ...sassLoaderOptions,
            implementation: require("sass"), // dart sass
          },
        },
      ],
      include: path.resolve(__dirname, "../src"),
    });

    return config;
  },
};
