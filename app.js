const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('middleware is get called');
});
app.use((req, res, next)=>{
    console.log('another middleware is get called');
});
const PORT = 1300;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
