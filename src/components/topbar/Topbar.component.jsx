import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Topbar.module.scss";
import Logo from "../../images/logos/icon-left-fontre.png";
import { sendLogoutRequest } from "../../api/api";
import useAuth from "../../hooks/useAuth";
import { getRoles, clearToken, clearRoles } from "../../helpers/auth-helpers";

// Menu TopBar General navigation bar.

export default function Topbar({ adminAccess }) {
  // Authorization
  const { auth } = useAuth();
  const userRole = auth.user.roles;
  console.log(userRole);
  // Submenu handler
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  // Navigation
  const navigate = useNavigate();

  // Unlog Handler
  const unLogHandler = async () => {
    clearToken();
    clearRoles();
    //sendLogoutRequest(auth.user);
    navigate("/login");
  };

  // Event to control the responsive menu.

  const subMenuHandler = () => {
    setSubMenuOpen(!isSubMenuOpen);
    console.log("isSubMenuOpen: ", isSubMenuOpen);
  };

  return (
    <div className={classes.topbar}>
      <div className={classes.topbar_logo}>
        <img src={Logo} alt="Groupomania Logo" />
      </div>

      <nav className={classes.topbar_menu}>
        <div
          onClick={subMenuHandler}
          className={`${classes.topbar_avatar} ${
            isSubMenuOpen && classes.show
          }`}
        >
          <img src="/assets/persons/v3_0014506.png" alt="Profile" />
        </div>

        <ul className={classes.topbar_links}>
          <li className={classes.topbar_item}>
            <Link className={classes.topbar_link} to="/">
              Accueil
            </Link>
          </li>
          <li className={classes.topbar_item}>
            <Link className={classes.topbar_link} to="/profile">
              Profile
            </Link>
          </li>
          {adminAccess.find((role) => userRole === role) && (
            <li className={classes.topbar_item}>
              <Link className={classes.topbar_link} to="/admin">
                Administration
              </Link>
            </li>
          )}
          <li
            className={`${classes.topbar_item} ${classes.notLink}`}
            onClick={unLogHandler}
          >
            Déconnexion
          </li>
        </ul>
      </nav>
    </div>
  );
}
