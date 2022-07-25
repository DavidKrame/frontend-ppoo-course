// "use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var index_1 = require("./reducers/index");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var store = (0, redux_1.createStore)(
  index_1["default"],
  (0, redux_devtools_extension_1.composeWithDevTools)(
    (0, redux_1.applyMiddleware)(redux_thunk_1["default"])
  )
);
exports["default"] = store;
