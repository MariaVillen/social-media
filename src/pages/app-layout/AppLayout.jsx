import classes from "./AppLayout.module.scss";
import Topbar from "../../components/topbar/Topbar.component";
import { Outlet } from "react-router-dom";

/**
 * @component
 * @name Layout
 * @description Navigation Bar and a main content that holds the differents pages.
 * @param {*} props props.onLogin: function to change if user is logged or not for logout function.
 * @returns
 */

function AppLayout (props) {

    return(
        <div className={classes.container}>
            <div className={classes.navigation}>
                <Topbar onLogin={props.onLogin} allowedRoles={props.allowedRoles}/>
            </div>
            <main className={classes.main}>
                <Outlet/>
            </main>
        </div>
    )
}

export default AppLayout;
