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
exports.panierDefault = void 0;
var constants_1 = require("../components/helpers/constants");
exports.panierDefault = [];
var initialState = {
  // USERS
  users: {
    currentUser: {
      isLoadingInfo: false,
      error: null,
      user: {},
    },
    currentClient: {
      isLoadingInfo: false,
      error: null,
      client: {},
    },
    allClients: {
      isLoadingInfo: false,
      error: null,
      clients: [],
    },
  },
  // CATEGORIES
  categories: {
    allCategories: {
      isLoadingInfo: false,
      error: null,
      categories: [],
    },
  },
  // PRODUCTS
  products: {
    allProducts: {
      currentCategory: null,
      isLoadingInfo: false,
      error: null,
      products: [],
    },
    infoProduct: {
      isLoadingInfo: false,
      error: null,
      product: {},
    },
  },
  // COMM
  commands: {
    allCommands: {
      currentCategory: null,
      isLoadingInfo: false,
      error: null,
      commands: [],
    },
    infoCommand: {
      isLoadingInfo: false,
      error: null,
      command: {},
    },
    createCommand: {
      isLoadingInfo: false,
      error: null,
      command: {
        amount: 0,
        user: null,
        created: "",
        status: constants_1.STATUS_COMMAND.ONPENDING,
        panier: __spreadArray([], exports.panierDefault, true),
      },
    },
  },
  // COMMANDS
  // commands: {
  //   allCommands: {
  //     isLoadingInfo: false,
  //     error: null,
  //     commands: __spreadArray([], constants_1.commandModel, true),
  //   },
  //   infoCommand: {
  //     isLoadingInfo: false,
  //     error: null,
  //     command: __assign({}, constants_1.commandModel[0]),
  //   },
  //   createCommand: {
  //     isLoadingInfo: false,
  //     error: null,
  //     command: {
  //       amount: 0,
  //       user: null,
  //       created: "",
  //       status: constants_1.STATUS_COMMAND.ONPENDING,
  //       panier: __spreadArray([], exports.panierDefault, true),
  //     },
  //   },
  // },
  // PANNIERS
  paniers: {
    allPaniers: {
      isLoadingInfo: false,
      error: null,
      paniers: [],
    },
    allPaniersByCommand: {
      isLoadingInfo: false,
      error: null,
      paniers: [],
    },
  },
};
exports["default"] = initialState;
