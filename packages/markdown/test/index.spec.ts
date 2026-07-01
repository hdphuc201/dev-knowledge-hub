import { describe, expect, it } from "vitest";
import { markdownPackageName, normalizeMarkdown } from "../src/index.js";

describe("markdown package", () => {
  it("normalizes markdown input by trimming whitespace", () => {
    expect(markdownPackageName).toBe("@dev-knowledge-hub/markdown");
    expect(
      normalizeMarkdown({
        source: "  # Heading  ",
      }),
    ).toEqual({
      source: "# Heading",
    });
  });
});
