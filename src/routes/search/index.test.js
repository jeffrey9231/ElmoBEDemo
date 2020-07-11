import request from "supertest";

import { apiRoot } from "../../config";
import express from "../../services/express";
import routes from ".";

const app = () => express(apiRoot, routes);

// e2e testing
test("GET /search get 200 success status", async () => {
  const { status, body } = await request(app()).get(
    `${apiRoot}/search?q=soccer`
  );
  expect(status).toBe(200);
  expect(typeof body).toEqual("object");

  // to check the object property in respoends array
  expect(body).toContainEqual(
    expect.objectContaining({
      id: expect.anything(),
      name: expect.anything(),
      screen_name: expect.anything(),
      profile_image_url: expect.anything(),
      followers_count: expect.anything(),
    })
  );
});

test("GET /details get 200 success status", async () => {
  const { status, body } = await request(app()).get(
    `${apiRoot}/details?id=44783853`
  );
  expect(status).toBe(200);
  expect(typeof body).toEqual("object");

  // to check the object property in respoends object
  expect(body).toHaveProperty("id");
  expect(body).toHaveProperty("name");
  expect(body).toHaveProperty("screen_name");
  expect(body).toHaveProperty("profile_image_url");
  expect(body).toHaveProperty("followers_count");
});
