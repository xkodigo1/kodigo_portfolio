import type { Preview } from "@storybook/nextjs-vite";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "error",
    },
    layout: "fullscreen",
    backgrounds: {
      default: "studio",
      values: [
        { name: "studio", value: "#f5f1e8" },
        { name: "ink", value: "#16120f" },
      ],
    },
  },
};

export default preview;
