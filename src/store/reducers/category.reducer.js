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
var categoryTypes_1 = require("../types/categoryTypes");
var categoryReducer = function (state, action) {
  if (state === void 0) {
    state = initialState_1["default"].categories;
  }
  var categories = __assign({}, state);
  switch (action.type) {
    // GET ALL CATEGORIES
    case categoryTypes_1.getAllCategoriesTypes.SET_GET_ALL_CATEGORIES_LOADING:
      categories.allCategories.isLoadingInfo = action.payload;
      return categories;
    case categoryTypes_1.getAllCategoriesTypes.SET_GET_ALL_CATEGORIES:
      categories.allCategories.categories = action.payload.categories;
      return categories;
    // CREATE NEW CATEGORY
    default:
      return categories;
  }
};
exports["default"] = categoryReducer;
