const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req, res, next)=>{
    res.send(`<html><body><form action="/product" method="POST"><input type="text" name="title"><input type="number" min="0" name="size" ><button type="submit"> Add Product </button></form></body></html>`);
});

app.use('/product', (req, res, next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});

app.use('/', (req, res)=>{
    res.send('<h1> Hello to the ExpressJS </h1>');
})

const PORT = 1300;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
