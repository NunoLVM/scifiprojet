import test from "node:test";
import assert from "node:assert/strict";

const restoreEnvVar = (key, value) => {
  if (value === undefined) {
    delete process.env[key];
  } else {
    process.env[key] = value;
  }
};

test("login returns controlled error when JWT_SECRET is missing", async () => {
  const originalSecret = process.env.JWT_SECRET;
  const originalNodeEnv = process.env.NODE_ENV;

  delete process.env.JWT_SECRET;
  process.env.NODE_ENV = "test";

  const { default: app } = await import("../app.js");

  const server = app.listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: "missing@example.com", password: "secret" }),
    });

    const body = await response.json();

    assert.equal(response.status, 500);
    assert.equal(body.message, "Authentication service is misconfigured. Please contact support.");
  } finally {
    server.close();
    restoreEnvVar("JWT_SECRET", originalSecret);
    restoreEnvVar("NODE_ENV", originalNodeEnv);
  }
});
