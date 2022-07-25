import { Dispatch } from "redux";
import { getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import {
  addProductInCommandTypes,
  createCommandTypes,
  createProductInCommandTypes,
  getAllCommandsTypes,
  ICommand,
  IPanier
} from "../types/commandTypes";

export const getAllCommands = () => async (dispatch: Dispatch) => {
  dispatch({
    type: getAllCommandsTypes.SET_GET_ALL_COMMANDS_LOADING,
    payload: true
  });
  try {
    const res = await getAPI("command/");
    if (res.data.status === 200)
      dispatch({
        type: getAllCommandsTypes.SET_GET_ALL_COMMANDS,
        payload: {
          commands: res.data.commands
        }
      });

    dispatch({
      type: getAllCommandsTypes.SET_GET_ALL_COMMANDS_LOADING,
      payload: false
    });
  } catch (err: any) {
    showToast({
      message: err?.response?.message || "Erreur de chargement des commandes, vérifiez votre connexion",
      typeToast: "error",
      autoClose: false
    });
  }
};

export const createCommand =
  (command: ICommand) => async (dispatch: Dispatch) => {
    dispatch({
      type: createCommandTypes.SET_CREATE_COMMAND_LOADING,
      payload: true
    });
    try {
      dispatch({
        type: createCommandTypes.SET_CREATE_COMMAND,
        payload: {
          command
        }
      });

      dispatch({
        type: createCommandTypes.SET_CREATE_COMMAND_LOADING,
        payload: false
      });
    } catch (err: any) {
      showToast({
        message: err || "Erreur lors de la création d'une commande",
        typeToast: "error",
        autoClose: false
      });
    }
  };

export const createProductInCommand =
  (prductofPanier: IPanier) => async (dispatch: Dispatch) => {
    dispatch({
      type: createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND_LOADING,
      payload: true
    });
    try {
      dispatch({
        type: createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND,
        payload: {
          prductofPanier
        }
      });

      dispatch({
        type: createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND_LOADING,
        payload: false
      });
    } catch (err: any) {
      showToast({
        message: err || "Erreur",
        typeToast: "error",
        autoClose: false
      });
    }
  };
export const addProductInCommand =
  (panier: IPanier[]) => async (dispatch: Dispatch) => {
    dispatch({
      type: addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND_LOADING,
      payload: true
    });
    try {
      dispatch({
        type: addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND,
        payload: {
          panier
        }
      });

      dispatch({
        type: addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND_LOADING,
        payload: false
      });
    } catch (err: any) {
      showToast({
        message: err || "Erreur",
        typeToast: "error",
        autoClose: false
      });
    }
  };
