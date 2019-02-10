const express = require('express');
const router = express.Router();


router.get("/add-product", (req, res, next) => {
	res.send(`
  <form action="/products" method='POST'>
  Enter:<br>
  <input type="text" name="title">
  <br><br>
  <input type="submit" value="Submit">
</form> 
`);
});

router.post("/products", (req, res, next) => {
	console.log("req ", req.body);
	res.redirect("/");
});

module.exports = router;