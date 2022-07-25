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
// import { GET_USER } from "../actions/authActions";
// import { IUser, IAuth, GlobalType } from "../../utils/TypesScript";
var authType_1 = require("../types/authType");
var authReducer = function (state, action) {
  if (state === void 0) {
    state = {};
  }
  //   var auth = __assign({}, state);
  switch (action.type) {
    case authType_1.AUTH:
      return action.payload;
    default:
      return state;
  }
};
exports["default"] = authReducer;
