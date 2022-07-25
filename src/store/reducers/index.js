// "use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var authReducer_1 = require("./authReducer");
var category_reducer_1 = require("./category.reducer");
var command_reducer_1 = require("./command.reducer");
var loadingReducer_1 = require("./loadingReducer");
var menuReducer_1 = require("./menuReducer");
var panier_reducer_1 = require("./panier.reducer");
var product_reducer_1 = require("./product.reducer");
var user_reducer_1 = require("./user.reducer");
exports["default"] = (0, redux_1.combineReducers)({
  auth: authReducer_1["default"],
  loading: loadingReducer_1["default"],
  menu: menuReducer_1["default"],
  categories: category_reducer_1["default"],
  products: product_reducer_1["default"],
  users: user_reducer_1["default"],
  commands: command_reducer_1["default"],
  paniers: panier_reducer_1["default"],
});
