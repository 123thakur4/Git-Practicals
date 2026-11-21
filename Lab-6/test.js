const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const { createApp } = require("./app");

test("GET / returns 200 and expected message", async () => {
  const server = createApp();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();

  try {
    const body = await new Promise((resolve, reject) => {
      http.get(http://127.0.0.1:/, (res) => {
        assert.equal(res.statusCode, 200);
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      }).on("error", reject);
    });
    assert.equal(body, "Hello from Lab 6 CI Pipeline!");
  } finally {
    server.close();
  }
});
