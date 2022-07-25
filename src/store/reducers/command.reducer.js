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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
var initialState_1 = require("../initialState");
var commandTypes_1 = require("../types/commandTypes");
var commandReducer = function (state, action) {
  if (state === void 0) {
    state = initialState_1["default"].commands;
  }
  var newState = __assign({}, state);
  switch (action.type) {
    // CREATE NEW PRODUCT IN COMMAND
    case commandTypes_1.createProductInCommandTypes
      .SET_CREATE_PRODUCT_IN_COMMAND_LOADING:
      newState.createCommand.isLoadingInfo = action.payload;
      return newState;
    case commandTypes_1.createProductInCommandTypes
      .SET_CREATE_PRODUCT_IN_COMMAND:
      var paniers = __spreadArray(
        [],
        newState.createCommand.command.panier,
        true
      );
      paniers.push(action.payload.prductofPanier);
      newState.createCommand.command.panier = paniers;
      return newState;
    // ADD QUANTITY OF PRODUCT
    case commandTypes_1.addProductInCommandTypes
      .SET_ADD_PRODUCT_IN_COMMAND_LOADING:
      newState.createCommand.isLoadingInfo = action.payload;
      return newState;
    case commandTypes_1.addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND:
      newState.createCommand.command.panier = action.payload.panier;
      return newState;
    //  GET ALL COMMANDS
    case commandTypes_1.getAllCommandsTypes.SET_GET_ALL_COMMANDS_LOADING:
      newState.allCommands.isLoadingInfo = action.payload;
      return newState;
    case commandTypes_1.getAllCommandsTypes.SET_GET_ALL_COMMANDS:
      newState.allCommands.commands = action.payload.commands;
      return newState;
    //  CREATE COMMAND
    case commandTypes_1.createCommandTypes.SET_CREATE_COMMAND:
      newState.createCommand.command.panier = initialState_1.panierDefault;
      return newState;
    default:
      return newState;
  }
};
exports["default"] = commandReducer;
