import { getYtID } from "./getYtId";

describe("Get YouTube ID from URL", () => {
  it("should grab the correct youtube IDs", () => {
    expect(getYtID("https://www.youtube.com/watch?v=GQO5zf550AU&ab_channel=YvonneWilliams")).toBe("GQO5zf550AU");
    expect(getYtID("https://youtu.be/k1hFnjUFSsY")).toBe("k1hFnjUFSsY");
    expect(getYtID("https://www.youtube.com/embed/eB0nUzAI7M8")).toBe("eB0nUzAI7M8");
    expect(getYtID("https://music.youtube.com/watch?v=phK2F_LW_lo&list=PLfKYcXx7bBHJSZpO1q8g_vzomg5hXMwhy")).toBe("phK2F_LW_lo");
  });
});
