import { add } from "./index";

describe("index", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });
});
