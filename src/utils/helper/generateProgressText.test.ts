import { generateProgressText } from "./generateProgressText";

describe("Generate Progress Text", () => {
  it("should generate correct text ", () => {
    expect(generateProgressText(30, 3145728, 5242880)).toBe("Fetching . . . 3.00MB / 5.00MB");
    expect(generateProgressText(80, 10485760, 10485760)).toBe("Preparing download . . . 10.00MB");
    expect(generateProgressText(100, 5242880, 8388608)).toBe("Ready! 8.00MB");
  });
});
