const main = require("../index");

describe("main module", () => {
  it("should be load main module", () => {
    expect(main).not.toBeNull();
  });
});
