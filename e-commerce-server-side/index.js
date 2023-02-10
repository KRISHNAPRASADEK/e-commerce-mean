const express = require("express");
const cors = require("cors");
const dataService = require("./services/dataServices");
const server = express();
server.use(
  cors({
    origin: "http://localhost:4200",
  })
);
server.use(express.json());
server.listen(3000, () => {
  console.log("cart server listening at port number 3000");
});

// all products api
server.get("/all-products", (req, res) => {
  dataService.allProducts().then((result) => {
    res.status(result.statusCode).json(result);
  });
});

// view product api
server.get("/view-product/:productId", (req, res) => {
  dataService.viewProduct(req.params.productId).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

// addtowishlist  api
server.post("/add-to-wishlist", (req, res) => {
  dataService.addToWishList(req.body).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

// get wishlist products api
server.get("/get-wishlist", (req, res) => {
  dataService.getWishList().then((result) => {
    res.status(result.statusCode).json(result);
  });
});
// remove wishlist products api
server.delete("/remove-item-wishlist/:productId", (req, res) => {
  dataService.deleteItemWishList(req.params.productId).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
