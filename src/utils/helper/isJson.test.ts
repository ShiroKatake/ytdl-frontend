import { isJson } from "./isJson";

describe("Check if a string is a json", () => {
  it("should validate string json", () => {
    const json = '{ "this": "object" }';
    expect(isJson(json)).toBeTruthy();
  });

  it("should not validate other strings", () => {
    const string = "Efawd42m-r4id";
    expect(isJson(string)).toBeFalsy();
  });
});
