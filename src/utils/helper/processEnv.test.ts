import { processEnv } from "./processEnv";

describe("Validate YouTube MIX Playlist URL", () => {
  it("should find env variable", () => {
    expect(processEnv("PROCESS_ENV_TEST")).toBe("this.is.test.com");
  });

  it("should throw if env variable not found", () => {
    expect(() => processEnv("NOT_VALID_ENV")).toThrow("Environment variable not found: NOT_VALID_ENV");
  });
});
