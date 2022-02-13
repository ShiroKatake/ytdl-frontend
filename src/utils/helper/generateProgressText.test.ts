import { generateProgressText } from "./generateProgressText";

describe("Generate Progress Text", () => {
  it("should generate correct text", () => {
    expect(generateProgressText(30)).toBe("Fetching . . . 30%");
    expect(generateProgressText(80)).toBe("Preparing download . . . 80%");
    expect(generateProgressText(100)).toBe("Ready! 100%");
  });
});
