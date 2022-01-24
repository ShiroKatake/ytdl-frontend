import { isUid } from "./isUid";

const getUniqueID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4();
};

describe("Get YouTube ID from URL", () => {
  it("should grab the correct youtube IDs", () => {
    for (let i = 0; i < 100; i++) {
      const id = getUniqueID();
      expect(isUid(id)).toBe(id);
    }
    expect(isUid("!fawd42m-r4id")).toBe("");
  });
});
