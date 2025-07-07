import type { Config } from '@jest/types';
//import type for the configuration and import from jest types.

const config: Config.InitialOptions = {
  preset: 'ts-jest', // jest to understand typescript code.
  testEnvironment: 'node',
  verbose: true, // this will show more info in the console.
};

export default config;

// config to look for code and run test.
