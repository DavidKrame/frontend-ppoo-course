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
var userTypes_1 = require("../types/userTypes");
var userReducer = function (state, action) {
  if (state === void 0) {
    state = initialState_1["default"].users;
  }
  var users = __assign({}, state);
  switch (action.type) {
    // GET ALL CLIENTS
    case userTypes_1.getAllClientsTypes.SET_GET_ALL_CLIENTS_LOADING:
      users.allClients.isLoadingInfo = action.payload;
      return users;
    case userTypes_1.getAllClientsTypes.SET_GET_ALL_CLIENTS:
      users.allClients.clients = action.payload.clients;
      return users;
    // GET INFO CLIENT
    case userTypes_1.getInfoClientTypes.SET_GET_INFO_CLIENT_LOADING:
      users.currentClient.isLoadingInfo = action.payload;
      return users;
    case userTypes_1.getInfoClientTypes.SET_GET_INFO_CLIENT:
      users.currentClient.client = action.payload.client;
      return users;
    // LOGIN USER
    case userTypes_1.loginUserTypes.SET_LOGIN_USER_LOADING:
      users.currentUser.isLoadingInfo = action.payload;
      return users;
    case userTypes_1.loginUserTypes.SET_LOGIN_USER:
      users.currentUser.user = action.payload.user;
      return users;
    // CREATE NEW USER
    default:
      return users;
  }
};
exports["default"] = userReducer;
