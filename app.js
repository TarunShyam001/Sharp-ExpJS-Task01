const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('middleware is get called');
    next();
});
app.use((req, res, next)=>{
    console.log('another middleware is get called');
    res.send(`<h1> Welcome to Express.JS</h1>`);
});
const PORT = 1300;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
