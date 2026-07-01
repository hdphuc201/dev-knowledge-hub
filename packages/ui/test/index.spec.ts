import { describe, expect, it } from "vitest";
import { uiPackageName } from "../src/index.js";

describe("ui package", () => {
  it("exposes the package identifier", () => {
    expect(uiPackageName).toBe("@dev-knowledge-hub/ui");
  });
});
