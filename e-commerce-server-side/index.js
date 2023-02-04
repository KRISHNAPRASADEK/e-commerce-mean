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
