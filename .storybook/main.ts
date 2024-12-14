import type { StorybookConfig } from "@storybook/angular";
import * as path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: [{ from: '../public/assets', to: '/assets' }],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Alias para apuntar a la librería dentro del monorepo
        '@relative': path.resolve(__dirname, '../projects/relative/src'),
      };
    }

    return config;
  },
};
export default config;
