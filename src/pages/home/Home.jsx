import classes from "./Home.module.scss";
import Feed from "../../components/feed/Feed.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Rightbar from "../../components/rightbar/Rightbar.component";
import Share from "../../components/share/Share.component";
import useMediaQuery from "../../hooks/useMediaQuery";


// Home Page

export default function Home() {
  const tablet = useMediaQuery("(min-width: 768px)");
  const pc = useMediaQuery("(min-width: 1200px)");

  return (
    <div className={classes.home_container}>
      {tablet ? <Sidebar className={classes.home_sidebar} /> : <></>}
      <div className={classes.home_feed_content}>
        <Share />
        <Feed />
      </div>
      {pc ? (
        <Rightbar className={classes.home_more_comment_content} />
      ) : (
        <></>
      )}
    </div>
  );
}
