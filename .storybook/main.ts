// your app's webpack.config.js
import custom from "../webpack.config";
import path from "path";

module.exports = {
  webpackFinal: async (config: any) => {
    return {
      ...config,
      module: { ...config?.module, rules: custom?.module?.rules },
    };
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
};
