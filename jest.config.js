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
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 28,
      functions: 39,
      lines: 39,
    },
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/utils/**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/components/index.ts"
  ],
  coverageReporters: ["json", "lcov", "text", "cobertura"],
};