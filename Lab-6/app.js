const http = require("http");

function createApp() {
  return http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Hello from Lab 6 CI Pipeline!");
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => {
    console.log("Server running on port " + port);
  });
}

module.exports = { createApp };
