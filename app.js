const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');

const adminRoutes = require('./router/admin');
const shopRoutes = require("./router/shop");

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

app.use((req,res,next)=> {
    res.status(404);
    res.render('404', {'pageTitle' : '404 Page Not Found :('});
})

app.listen(3000);

