/** @type {import('jest').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.(m|j|t)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: ['/node_modules/(?!@openmrs|@carbon/charts|@carbon/charts-react|d3|d3-.+|.+\\.pnp\\.[^\\/]+$)'],

  moduleDirectories: ['node_modules', '__mocks__', 'tools', 'src', __dirname],
  moduleNameMapper: {
    '@carbon/charts/interfaces': '<rootDir>/__mocks__/@carbon/charts/interfaces.js',
    '\\.(s?css)$': 'identity-obj-proxy',


    '@openmrs/esm-framework': '@openmrs/esm-framework/mock',
    '^@carbon/icons-react/es/(.*)$': '@carbon/icons-react/lib/$1',
    '^carbon-components-react/es/(.*)$': 'carbon-components-react/lib/$1',
    '^lodash-es/(.*)$': 'lodash/$1',
    'lodash-es': 'lodash',
    '^react-i18next$': path.resolve(__dirname, '__mocks__', 'react-i18next.js'),
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@resources/(.*)$': '<rootDir>/src/resources/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: [path.resolve(__dirname, 'tools', 'setup-tests.ts')],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{ts,tsx}',
    '!src/index.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
