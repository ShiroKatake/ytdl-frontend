import { isYtMixList } from "./isYtMixList";

describe("Validate YouTube MIX Playlist URL", () => {
  it("should validate every variance of playlist urls", () => {
    expect(isYtMixList("https://www.youtube.com/watch?v=aqIVNv8VmBs&list=RDaqIVNv8VmBs&start_radio=1&ab_channel=OrtegaGuitars")).toBeTruthy();
    expect(isYtMixList("https://www.youtube.com/watch?v=OgZ2jidPBS0&list=RDOgZ2jidPBS0&start_radio=1&ab_channel=FlorianBur-Topic")).toBeTruthy();
    expect(isYtMixList("https://www.youtube.com/watch?v=mtf7hC17IBM&list=RDEMYB-4c-AB4xI_EZVgtnWxGA&start_radio=1")).toBeTruthy();
  });

  it("should not validate normal list or videos in a normal list", () => {
    expect(isYtMixList("https://music.youtube.com/watch?v=phK2F_LW_lo&list=PLfKYcXx7bBHJSZpO1q8g_vzomg5hXMwhy")).toBeFalsy();
    expect(isYtMixList("https://www.youtube.com/embed/videoseries?list=PLlUjfHIGjNUISAhYlSFg0i9DivP2ZaSgt")).toBeFalsy();
  });
});
