const express = require('express');
const bodyParser =  require('body-parser');

const adminRoutes = require('./router/admin');
const shopRoutes = require("./router/shop");

// node js server fire up test

// const server  = http.createServer((req,res) => {
//     console.log("response ", res);
// });

// server.listen(3000);

const app = express();
//adding middle ware 

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use(adminRoutes);






app.listen(3000);

