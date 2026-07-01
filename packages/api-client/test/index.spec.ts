import { describe, expect, it } from "vitest";
import { apiClientPackageName, createApiClient } from "../src/index.js";

describe("api-client package", () => {
  it("creates a minimal client configuration", () => {
    expect(apiClientPackageName).toBe("@dev-knowledge-hub/api-client");
    expect(
      createApiClient({
        baseUrl: "https://example.test",
      }),
    ).toEqual({
      baseUrl: "https://example.test",
    });
  });
});
