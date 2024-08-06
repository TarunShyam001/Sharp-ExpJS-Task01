const express = require('express');

const app = express();

app.use('/add-product',(req, res, next)=>{
    res.send(`<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product </button><br><input type="number" min="0"><button type="submit"> Add Size </button></form></body></html>`)
});

app.use('/product', (req, res, next)=>{
    console.log(res.body);
    res.redirect('/');
});

app.use('/', (req, res)=>{
    console.log('Task performed');
    res.send('<h1> Hello to the ExpressJS </h1>');
})

const PORT = 1300;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
