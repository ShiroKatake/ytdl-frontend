import { generateDownloadUrl } from "./generateDownloadUrl";

describe("Generate Download URL", () => {
  it("should generate urls for mp3 and mp4", () => {
    expect(generateDownloadUrl("videoId", "uid", "mp3")).toBe(
      "http://localhost:4000/download?v=videoId&format=mp3&uid=uid"
    );
    expect(generateDownloadUrl("differentId", "mp4", "uid")).toBe(
      "http://localhost:4000/download?v=differentId&format=mp4&uid=uid"
    );
  });

  it("should generate urls for mp4 when format is not passed", () => {
    expect(generateDownloadUrl("noFormat", "uid")).toBe(
      "http://localhost:4000/download?v=noFormat&format=mp4&uid=uid"
    );
  });

  it("should not generate urls for any other input", () => {
    expect(() => {
      generateDownloadUrl("differentId", "uid", "notValid");
    }).toThrow("Invalid format.");
  });
});
