// "use strict";
// exports.__esModule = true;
// var react_1 = require("react");
// var react_dom_1 = require("react-dom");
// var App_1 = require("./App");
// require("./styles/index.scss");
// var reportWebVitals_1 = require("./reportWebVitals");
// var store_1 = require("./store/store");
// var react_redux_1 = require("react-redux");
// react_dom_1["default"].render(<react_1["default"].StrictMode>
//     <react_redux_1.Provider store={store_1["default"]}>
//       <App_1["default"] />
//     </react_redux_1.Provider>
//   </react_1["default"].StrictMode>, document.getElementById("root"));
// (0, reportWebVitals_1["default"])();
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles/index.scss";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
