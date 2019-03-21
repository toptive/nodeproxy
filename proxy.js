const express = require("express");
const proxy   = require("http-proxy-middleware");
const cors    = require("cors");
const app     = express();

// Parse arguments
const customPort = Number.isInteger(parseInt(process.argv[2]));
const port       = customPort ? process.argv[2] : 4000;
const targetUrl  = process.argv[customPort ? 3 : 2] || "http://localhost:80/";

// Allows CORS requests
app.use(cors());

// Proxy all requests to target url changing origin
app.use(proxy({
  target: targetUrl,
  changeOrigin: true,
  logLevel: "debug",
  onError: err => console.error(err),
}));

// start the express server
app.listen(port);
console.log(`[APP] Listening on port ${port}`);
