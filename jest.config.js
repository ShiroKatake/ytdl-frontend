module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/build/",
    "<rootDir>/public/",
  ],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/src/mocks/mockCSS.js'
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/utils/helper/*.{js,jsx,ts}",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/components/index.ts",
  ],
  coverageReporters: ["json", "lcov", "text", "cobertura"],
};