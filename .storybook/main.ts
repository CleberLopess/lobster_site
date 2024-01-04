import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public", "../src/stories/assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {},
              },
            ],
          },
        ],
      },
    },
  ],
  docs: {
    autodocs: "tag",
  },
};

export default config;
