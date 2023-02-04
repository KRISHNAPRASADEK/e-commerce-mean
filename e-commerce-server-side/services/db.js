const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ecommerce", () => {
  console.log("monogodb connection sucessful!!");
});

const Product = mongoose.model("Product", {
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

module.exports = {
  Product,
};
