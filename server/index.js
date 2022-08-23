//  index.js
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'));
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(
      '\x1b[32m%s\x1b[0m', 'API Server V 1.0', 
      '\nSimple API server for shopping cart',
      `\nServer listening for port`, `\x1b[33m${PORT}\x1b[0m`
    );
    console.log('\x1b[36m%s\x1b[0m', 'Press CNTRL+C to stop ...');
});

module.exports = app;