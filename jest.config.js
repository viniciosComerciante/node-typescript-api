/* eslint @typescript-eslint/no-var-requires: "off" */
const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
    rootDir: root,
    displayName: 'roots-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1'
    }
};