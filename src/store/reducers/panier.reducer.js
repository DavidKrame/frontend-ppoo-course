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
var panierTypes_1 = require("../types/panierTypes");
var panierReducer = function (state, action) {
  if (state === void 0) {
    state = initialState_1["default"].paniers;
  }
  var newState = __assign({}, state);
  switch (action.type) {
    //  GET ALL PANIERS BY COMMAND
    case panierTypes_1.getPaniersByCommandTypes
      .SET_GET_PANIERS_BY_COMMAND_LOADING:
      newState.allPaniersByCommand.isLoadingInfo = action.payload;
      return newState;
    case panierTypes_1.getPaniersByCommandTypes.SET_GET_PANIERS_BY_COMMAND:
      newState.allPaniersByCommand.paniers = action.payload.paniers;
      return newState;
    default:
      return newState;
  }
};
exports["default"] = panierReducer;
