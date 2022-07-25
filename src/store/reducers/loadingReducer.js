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
var globalTypes_1 = require("../types/globalTypes");
var loadingReducer = function (state, action) {
  if (state === void 0) {
    state = globalTypes_1.initialState.loading;
  }
  var loading = __assign({}, state);
  switch (action.type) {
    case globalTypes_1.LOADING:
      loading = action.payload;
      console.log("loading :>> ", loading);
      return action.payload;
    default:
      return state;
  }
};
exports["default"] = loadingReducer;
