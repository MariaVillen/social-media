import classes from "./Topbar.module.scss";
import { useState } from "react";
import Logo from "../../images/logos/icon-left-fontre.png";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [ isSubMenuOpen, setSubMenuOpen ] = useState(false);

  const subMenuHandler = ()=>{
    setSubMenuOpen(!isSubMenuOpen);
    console.log('isSubMenuOpen: ', isSubMenuOpen);
  } 

  return (
    <div className={classes.topbar}>

      <div className={classes.topbar_logo}>
        <img src={Logo} alt="Groupomania Logo" />
      </div>

      <nav>

        <div onClick={subMenuHandler} className={`${classes.topbar_avatar} ${isSubMenuOpen && classes.show}`}>
          <img src="/assets/persons/v3_0014506.png" alt="Profile" />
        </div>

        <ul className={classes.topbar_links}>
          <li className={classes.topbar_link}><Link to='/'>Accueil</Link></li>
          <li className={classes.topbar_link}><Link to='/profile'>Profile</Link></li>
          <li className={classes.topbar_link}>Profile</li>
        </ul>

      </nav>
    </div>
  );
}
