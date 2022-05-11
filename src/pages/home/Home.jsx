import classes from "./Home.module.scss";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {

  return (
    <div className={classes.home_container}> 
      <div className={classes.menu_content}>
        <Sidebar />
      </div>
      <div className={classes.feed_content}>
        <Feed />
      </div>
    </div>   
  );
}
