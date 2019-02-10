const express = require('express');

// node js server fire up test

// const server  = http.createServer((req,res) => {
//     console.log("response ", res);
// });

// server.listen(3000);

const app = express();
//adding middle ware 

app.use((req,res,next)=> {
    console.log("in the Middle ware");
    next();
})

app.use((req, res, next) => {
   res.send('<h1>Hello from Node JS</h1>');
})

app.listen(3000);

