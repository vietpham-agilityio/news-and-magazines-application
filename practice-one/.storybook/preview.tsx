import type { Preview } from "@storybook/react";
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFF" },
        { name: "dark", value: "#333" },
      ],
    },
  },
};

export default preview;
