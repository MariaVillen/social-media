import classes from "./Layout.module.scss";
import Topbar from "../../components/topbar/Topbar";


function Layout (props) {
    return(
        <div className={classes.container}>
        <Topbar className={classes.topbar} />
        <main className={classes.main}>
        {props.children}
        </main>
        </div>
        
    )
}

export default Layout;