import { isYtList } from "./isYtList";

describe("Validate YouTube Playlist URL", () => {
  it("should validate every variance of playlist urls", () => {
    expect(isYtList("https://music.youtube.com/playlist?list=PLfKYcXx7bBHIRr3gMIXF6Bq44jNOuOvrs")).toBeTruthy();
    expect(isYtList("https://www.youtube.com/embed/videoseries?list=PLlUjfHIGjNUISAhYlSFg0i9DivP2ZaSgt")).toBeTruthy();
    expect(isYtList("https://www.youtube.com/playlist?list=PLfKYcXx7bBHKk8OoY1qzHgLgiQqB6AC2O")).toBeTruthy();
  });

  it("should not validate videos in a list", () => {
    expect(isYtList("https://music.youtube.com/watch?v=phK2F_LW_lo&list=PLfKYcXx7bBHJSZpO1q8g_vzomg5hXMwhy")).toBeFalsy();
  });
});
