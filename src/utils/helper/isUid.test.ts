import { isUid } from "./isUid";

const getUniqueID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4();
};

describe("Check valid UID", () => {
  it("should work with the back-end ID generator", () => {
    for (let i = 0; i < 100; i++) {
      const id = getUniqueID();
      expect(isUid(id)).toBe(id);
    }
  });

  it("should not work with symbols", () => {
    expect(isUid("!fawd42m-r4id")).toBe("");
  });
});
