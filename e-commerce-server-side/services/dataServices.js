const db = require("./db");
// all products
const allProducts = () => {
  return db.Product.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "Data is empty",
      };
    }
  });
};

module.exports = {
  allProducts,
};
