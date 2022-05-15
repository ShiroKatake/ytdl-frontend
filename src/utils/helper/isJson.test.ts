import { tryParseJSON } from "./isJson";

describe("Check if a string is a json", () => {
  it("should validate string json", () => {
    const json = '{ "this": "object" }';
    const resJson = { this: "object" };
    expect(tryParseJSON(json)).toStrictEqual(resJson);
  });

  it("should not validate other strings", () => {
    const string = "Efawd42m-r4id";
    expect(tryParseJSON(string)).toBeFalsy();
  });
});
