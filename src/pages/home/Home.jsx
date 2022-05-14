import classes from "./Home.module.scss";
import Feed from "../../components/feed/Feed.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Rightbar from "../../components/rightbar/Rightbar.component";
import Share from "../../components/share/Share.component";


// Home Page

export default function Home() {
  return (
    <div className={classes.home_container}>
      <Sidebar className={classes.home_sidebar} />
      <div className={classes.home_feed_content}>
        <Share />
        <Feed />
      </div>
      <Rightbar className={classes.home_more_comment_content} />
    </div>
  );
}
