import { app } from "../server";
import * as request from "supertest";
import { test, expect } from "@jest/globals";

test("can fetch github data", async () => {
  const response = await request(app).get("/package_data");
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.status).toEqual(200);

  expect(Array.isArray(response.body)).toBe(true);

  const actualRepoNames = response.body.map((githubRepo) => githubRepo.name);

  // make sure some common repos are present
  const expectedRepos = [
    "pip",
    "pip",
    "cython",
    "flit",
    "pdm",
    "build",
    "poetry",
    "pipx",
  ];
  expectedRepos.map((repo) => {
    expect(actualRepoNames.includes(repo)).toBe(true);
  });

  const actualFields = Object.keys(response.body[0]);
  const expectedFields = [
    "stargazers",
    "licenseInfo",
    "primaryLanguage",
    "url",
    "owner",
  ];

  expectedFields.map((expectedField) => {
    expect(actualFields.includes(expectedField)).toBe(true);
  });
});
