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
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: [
    '**/*.tsx',
    '**/utils/**',
    '!**/utils/index.ts',
    '!**/app/**',
    '!**/mocks/**',
    '!**/constants/**',
    '!**.storybook/**',
    '!**/*.stories.tsx',
    '!**/ui/sections/**',
    '!**/ui/layouts/Header/**',
    '!**/ui/components/Icons/**',
  ],

};

export default nextjest({ dir: './' })(config);