// "use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
var initialState_1 = require("../initialState");
var productTypes_1 = require("../types/productTypes");
var productReducer = function (state, action) {
  if (state === void 0) {
    state = initialState_1["default"].products;
  }
  var products = __assign({}, state);
  switch (action.type) {
    // GET ALL PRODUCTS
    case productTypes_1.getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING:
      products.allProducts.isLoadingInfo = action.payload;
      return products;
    case productTypes_1.getAllProductsTypes.SET_GET_ALL_PRODUCTS:
      products.allProducts.currentCategory = action.payload.currentCategory;
      products.allProducts.products = action.payload.products;
      return products;
    // GET INFO PRODUCT
    case productTypes_1.getInfoProductTypes.SET_GET_INFO_PRODUCT_LOADING:
      products.infoProduct.isLoadingInfo = action.payload;
      return products;
    case productTypes_1.getInfoProductTypes.SET_GET_INFO_PRODUCT:
      products.infoProduct.product = action.payload.product;
      return products;
    // CREATE NEW PRODUCT
    default:
      return products;
  }
};
exports["default"] = productReducer;
