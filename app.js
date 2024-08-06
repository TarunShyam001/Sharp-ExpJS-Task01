const http = require('http');
const express = require('express');

const app = express();

const PORT = 1300;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
