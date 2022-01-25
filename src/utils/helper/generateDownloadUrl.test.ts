import { generateDownloadUrl } from "./generateDownloadUrl";

describe("Generate Download URL", () => {
  it("should generate urls for mp3 and mp4", () => {
    expect(generateDownloadUrl("videoId", "mp3")).toBe("http://localhost:4000/download?v=videoId&format=mp3");
    expect(generateDownloadUrl("differentId", "mp4")).toBe("http://localhost:4000/download?v=differentId&format=mp4");
  });

  it("should generate urls for mp4 when format is not passed", () => {
    expect(generateDownloadUrl("noFormat")).toBe("http://localhost:4000/download?v=noFormat&format=mp4");
  });

  it("should not generate urls for any other input", () => {
    expect(() => {
      generateDownloadUrl("differentId", "ma7dfe");
    }).toThrow("Invalid format.");
  });
});
