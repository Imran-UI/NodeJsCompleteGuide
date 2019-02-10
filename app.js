const express = require('express');
const bodyParser =  require('body-parser');

// node js server fire up test

// const server  = http.createServer((req,res) => {
//     console.log("response ", res);
// });

// server.listen(3000);

const app = express();
//adding middle ware 

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=> {
    res.send(`
  <form action="/products" method='POST'>
  Enter:<br>
  <input type="text" name="title">
  <br><br>
  <input type="submit" value="Submit">
</form> 
`);
})

app.post("/products", (req, res, next) => {
    console.log("req ", req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
   res.send('<h1>Hello from Node JS</h1>');
})

app.listen(3000);

