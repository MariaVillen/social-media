import classes from "./Home.module.scss";
import Feed from "../../components/feed/Feed.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Rightbar from "../../components/rightbar/Rightbar.component";
import Share from "../../components/share/Share.component";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Home() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className={classes.home_container}>
      {matches ? <Sidebar className={classes.home_sidebar} /> : <></>}
      <div className={classes.home_feed_content}>
        <Share />
        <Feed />
      </div>
      {matches ? (
        <Rightbar className={classes.home_more_comment_content} />
      ) : (
        <></>
      )}
    </div>
  );
}
