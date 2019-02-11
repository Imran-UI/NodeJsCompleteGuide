const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');

const adminRoutes = require('./router/admin');
const shopRoutes = require("./router/shop");
const errorController = require('./controllers/error.controller');

// node js server fire up test

// const server  = http.createServer((req,res) => {
//     console.log("response ", res);
// });

// server.listen(3000);

const app = express();

app.set('views' , 'views');
app.set('view engine', 'ejs');

//adding middle ware 
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminRoutes.router);

app.use(errorController.get404);

app.listen(3000);

