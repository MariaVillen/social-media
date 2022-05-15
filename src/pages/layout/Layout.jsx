import classes from "./Layout.module.scss";
import Topbar from "../../components/topbar/Topbar.component";


/**
 * @component 
 * @name Layout
 * @description Navigation Bar and a main content that holds the differents pages.
 * @param {*} props props.onLogin: function to change if user is logged or not for logout function.
 * @returns 
 */

function Layout (props) {

    return(
        <div className={classes.container}>
            <div className={classes.navigation}>
                <Topbar onLogin={props.onLogin} allowedRoles={props.allowedRoles}/>
            </div>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;