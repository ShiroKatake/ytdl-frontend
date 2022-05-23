import { getHostname } from "./getHostname";

describe("Validate YouTube MIX Playlist URL", () => {
  it("should return backend hostname if frontend hostname is supported", () => {
    const result = getHostname();
    expect(result).toBe("back-end.environment.com");
  });

  it("should throw if frontend hostname is not supported", () => {
    delete (window as any).location;
    (window as any).location = new URL('https://www.notsupported.com');
    expect(() => getHostname()).toThrow("Hostname not supported.");
  });
});
