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
  // setupFilesAfterEnv: [
  //   "@testing-library/jest-dom/extend-expect"
  // ],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/src/mocks/mockCSS.js'
  },
  // moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageThreshold: {
    global: {
      statements: 40.44,
      branches: 16.66,
      functions: 30.61,
      lines: 37.5,
    },
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/utils/helper/*.{js,jsx,ts}",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/components/index.ts",
    "<rootDir>/src/utils/handler/*.{js,jsx,ts}",
  ],
  coverageReporters: ["json", "lcov", "text", "cobertura"],
};