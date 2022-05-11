import classes from "./Home.module.scss";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
  return (
    <div className={classes.home_container}>
      <Sidebar className={classes.home_sidebar} />
      <Feed className={classes.feed_content} />
      <Rightbar className={classes.more_comment_content} />
    </div>
  );
}
