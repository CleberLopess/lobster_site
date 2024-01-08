import { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles/tailwind-global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      withThemeByDataAttribute({
        themes: {
          light: "",
          dark: "dark",
        },
        defaultTheme: "dark",
        attributeName: "data-theme",
      }),
    ],
  },
};

export default preview;
