import { generateDownloadUrl } from "./generateDownloadUrl";

describe("Generate Download URL", () => {
  it("should generate urls for mp3 and mp4", () => {
    expect(generateDownloadUrl("videoId", "mp3")).toBe(
      "back-end.environment.com/download?v=videoId&format=mp3"
    );
    expect(generateDownloadUrl("differentId", "mp4")).toBe(
      "back-end.environment.com/download?v=differentId&format=mp4"
    );
  });

  it("should generate urls for mp4 when format is not passed", () => {
    expect(generateDownloadUrl("noFormat")).toBe(
      "back-end.environment.com/download?v=noFormat&format=mp4"
    );
  });

  it("should not generate urls for any other input", () => {
    expect(() => {
      generateDownloadUrl("differentId", "notValid");
    }).toThrow("Invalid format.");
  });
});
