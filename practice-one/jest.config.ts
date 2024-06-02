/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import nextjest from 'next/jest';

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx|mjs|cjs)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    '**/*.tsx',
    '!**/app/**',
    '!**/ui/components/Icons/**',
    '!**/ui/features/**',
    '!**/ui/layouts/**',
    '!**/constants/**',
    '!**.storybook/**',
    '!**/*.stories.tsx',
  ],

};

export default nextjest({ dir: './' })(config);