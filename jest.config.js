module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90,
    }
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/build/",
    "<rootDir>/public/",
  ],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/src/__mocks__/mockCSS.js'
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/utils/helper/*.{js,jsx,ts}",
    "<rootDir>/src/App.tsx",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/components/index.ts",
    "downloadFromLink.ts",
  ],
  coverageReporters: ["json", "lcov", "text", "cobertura"],
};