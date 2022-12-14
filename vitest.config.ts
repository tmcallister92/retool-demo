/* eslint-disable-next-line import/no-extraneous-dependencies */ // file is only for testing
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true, // always clear mocks beforeEach test
    environment: 'node',
    coverage: {
      all: true,
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
      extension: ['.ts'],
    },
  },
});
