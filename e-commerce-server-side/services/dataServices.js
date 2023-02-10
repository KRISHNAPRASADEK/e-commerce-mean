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
// view product
const viewProduct = (id) => {
  return db.Product.findOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        product: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "Product is unavailable",
      };
    }
  });
};
// to store data in wishlist
const addToWishList = (product) => {
  return db.Wishlist.findOne({ id: product.id }).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "Already added to wishlist",
      };
    } else {
      let newProduct = new db.Wishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
          rate: product.rating.rate,
          count: product.rating.count,
        },
      });
      newProduct.save();
      return {
        statusCode: 200,
        message: "Item added to your wishlist",
      };
    }
  });
};

// get wishlist product
const getWishList = () => {
  return db.Wishlist.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        wishlist: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "wishlist is empty",
      };
    }
  });
};
// delete wishlist product
const deleteItemWishList = (id) => {
  return db.Wishlist.deleteOne({ id }).then((result) => {
    if (result) {
      return db.Wishlist.find().then((result) => {
        if (result) {
          return {
            statusCode: 200,
            wishlist: result,
          };
        } else {
          return {
            statusCode: 404,
            message: "wishlist is empty",
          };
        }
      });
    } else {
      return {
        statusCode: 404,
        message: "Item not found",
      };
    }
  });
};

module.exports = {
  allProducts,
  viewProduct,
  addToWishList,
  getWishList,
  deleteItemWishList,
};
