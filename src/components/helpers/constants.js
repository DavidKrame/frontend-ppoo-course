// "use strict";
exports.__esModule = true;
exports.textMessageSignUp =
  exports.TAB_ADMIN =
  exports.STATUS_COMMAND =
  exports.commandModel =
  exports.imgProjects =
  exports.textMessageLogin =
    void 0;
exports.textMessageLogin = {
  COMPLETE_ALL_FIELDS:
    "Veillez completez les tous les champs avec  informations valides",
  COMPLETE_PASSWORD_FIELD: "Veillez taper votre mot de passe",
  COMPLETE_EMAIL_FIELD: "Veillez taper votre email",
  EMAIL_OR_PASSWORD_INVALID: "Email ou mot de passe invalide",
  COMPLETE_ALL_FIELDS_REQUIRED:
    "Veillez completez les tous les champs requis avec  informations valides",
};

exports.commandModel = [
  {
    id: 1,
    amount: 200,
    user: {
      id: 3,
      name: "name ofCLient",
    },
    created: "20/02/2022",
    status: "PAYED",
    panier: [
      {
        nameProduct: "NameOfproduit_1",
        product: 1,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 2,
        total: 10, //
      },
      {
        nameProduct: "NameOfproduit_1",
        product: 5,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 5,
        total: 25,
      },
      {
        nameProduct: "",
        product: 3,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 2,
        total: 10,
      },
    ],
  },
];
var STATUS_COMMAND;
(function (STATUS_COMMAND) {
  STATUS_COMMAND["ONPENDING"] = "ONPENDING";
  STATUS_COMMAND["PAYED"] = "PAYED";
})((STATUS_COMMAND = exports.STATUS_COMMAND || (exports.STATUS_COMMAND = {})));
var TAB_ADMIN;
(function (TAB_ADMIN) {
  TAB_ADMIN[(TAB_ADMIN["CLIENTS"] = 0)] = "CLIENTS";
  TAB_ADMIN[(TAB_ADMIN["PRODUCTS"] = 1)] = "PRODUCTS";
  TAB_ADMIN[(TAB_ADMIN["CATEGORIES"] = 2)] = "CATEGORIES";
  TAB_ADMIN[(TAB_ADMIN["COMMANDS"] = 3)] = "COMMANDS";
})((TAB_ADMIN = exports.TAB_ADMIN || (exports.TAB_ADMIN = {})));
// text For showToast
exports.textMessageSignUp = {
  COMPLETE_ALL_FIELDS_REQUIRED:
    "Veillez completez tous les champs requis avec des informations valides",
};
