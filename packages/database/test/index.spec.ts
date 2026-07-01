import { describe, expect, it } from "vitest";
import { createDatabaseConfig, databasePackageName } from "../src/index.js";

describe("database package", () => {
  it("creates a database config without touching the live database", () => {
    expect(databasePackageName).toBe("@dev-knowledge-hub/database");
    expect(createDatabaseConfig("postgresql://localhost:5432/dev_knowledge_hub")).toEqual({
      connectionUrl: "postgresql://localhost:5432/dev_knowledge_hub",
    });
  });
});
