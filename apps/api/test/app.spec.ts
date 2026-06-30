import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { AppModule } from "../src/app.module.js";

describe("AppController", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.listen(0);
  });

  afterAll(async () => {
    await app.close();
  });

  it("responds on the root endpoint", async () => {
    const response = await fetch(`${await app.getUrl()}/`);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      service: "api",
      status: "ok",
    });
  });
});
