import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { useHistory } from "react-router-dom";
import { showToast } from "../components/shared/ToastAlert";
import { useSelector } from "react-redux";
import ShoppingBadges from "./ShoppingBadges";
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoginIcon from "../assets/icons/login_white_24dp.svg";
import LogoutIcon from "../assets/icons/logout_white_24dp.svg";
import { askSession } from "../context/AppContext";
import Storage, { keyStorage } from "../context/Storage";
// import ShopIcon from "@material-ui/icons/Shop";
import Logo from "../../src/assets/img/Logo2.jpg"

const SIZE_SCREEN = 670;
export const AppBar = () => {
  const history = useHistory();
  const { createCommand } = useSelector((state: any) => state.commands);
  const { currentUser } = useSelector((state: any) => state.users);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const [large, setLarge] = useState(window.innerWidth);
  const toggleNavSmall = () => {
    setToggleMenu(!toggleMenu);
  };
  const { logged, user } = askSession();

  useEffect(() => {
    askSession();
  }, [currentUser.user]);

  useEffect(() => {
    const changeWidth = () => {
      setLarge(window.innerWidth);
      if (window.innerWidth > SIZE_SCREEN) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const selectPath = (path: string) => {
    try {
      history.push(path);
      if (large < SIZE_SCREEN) {
        setTimeout(() => {
          setToggleMenu(false);
        }, 300);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const logout = () => {
    Storage.removeItem(keyStorage.currentUser);
    selectPath("/");
    window.location.reload();
  };

  return (
    <div className='containerAppBar'>
      <div className='logo isCursor ' onClick={() => history.push("/")}>
        <p>
          <img width="110px" height="67px" src={Logo} alt="Logo" />
        </p>
      </div>
      {(large > SIZE_SCREEN || toggleMenu) && (
        <>
          <div className=' content-middle'>
            <ul className='liste' data-aos='fade-down'>
              <li className='items isCursor' onClick={() => selectPath("/")}>
                Accueil
              </li>
              <li
                className='items'
                onClick={() => {
                  if (logged) {
                    if (user.role === 1) return selectPath("/admin");
                    else {
                      return showToast({
                        message: "Réservé aux administrateurs",
                        typeToast: "dark"
                      });
                    }
                  } else {
                    showToast({
                      message: "Veuillez vous connecter en tant qu'admin",
                      typeToast: "dark"
                    });
                    return history.push("/login");
                  }
                }}
              >
                Admin
              </li>
              <li
                className='items isCursor'
                onClick={() => selectPath("/monPanier")}
              >
                <ShoppingBadges
                  length={createCommand?.command?.panier?.length || 0}
                />
              </li>

              {logged ? (
                <li
                  title='Se déconnecter'
                  className='items  hide_element'
                  onClick={() => logout()}
                >
                  {user.name}

                  <img style={{
                      transform: " translateY(22%)",
                      marginRight: "10px"
                    }} src={LogoutIcon} alt="Logout" />
                </li>
              ) : (
                <li
                  className='items  hide_element'
                  onClick={() => selectPath("/login")}
                >
                  <img style={{
                      transform: " translateY(22%)",
                      marginRight: "10px"
                    }} src={LoginIcon} alt="Login" />
                  Se connecter
                </li>
              )}
            </ul>
          </div>
        </>
      )}
      <div className='content-lef'>
        {createCommand?.command?.panier?.length > 0 &&
          !toggleMenu &&
          large < SIZE_SCREEN && (
            <span>
              <ShoppingBadges
                length={createCommand?.command?.panier?.length || 0}
              />
            </span>
          )}
        <button className='btn_toggle' onClick={toggleNavSmall}>
          {toggleMenu ? <CloseIcon /> : <DehazeIcon />}
        </button>
      </div>
    </div>
  );
};
