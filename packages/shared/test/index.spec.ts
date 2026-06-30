import { describe, expect, it } from "vitest";
import { assertNever, isDefined, sharedPackageName } from "../src/index.js";

describe("shared package", () => {
  it("exposes the package name and helpers", () => {
    expect(sharedPackageName).toBe("@dev-knowledge-hub/shared");
    expect(isDefined("value")).toBe(true);
    expect(isDefined(undefined)).toBe(false);
    expect(() => assertNever("x" as never)).toThrow("Unexpected value: x");
  });
});
