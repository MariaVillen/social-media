import classes from "./Home.module.scss";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Rightbar from "../../components/rightbar/Rightbar.component";
import Share from "../../components/share/Share.component";
import useMediaQuery from "../../hooks/useMediaQuery";
import {useState } from "react";
import { useOutletContext } from "react-router-dom";
import Feed from "../../components/feed/Feed.component";

// Home Page

export default function Home() {
  
  const tablet = useMediaQuery("(min-width: 768px)");
  const pc = useMediaQuery("(min-width: 1200px)");
  const {users} = useOutletContext();
  const [ loadPosts, isLoadPosts] = useState(true);

  return (
    <div className={classes.home_container}>
      {tablet ? <Sidebar className={classes.home_sidebar} users={users} /> : <></>}
      <div className={classes.home_feed_content}>
        <Share isLoadPosts={isLoadPosts} loadPosts = {loadPosts}/>
        <Feed loadPosts = {loadPosts} isLoadPosts={isLoadPosts}/>
      </div>
      {pc ? (
        <Rightbar className={classes.home_more_comment_content} />
      ) : (
        <></>
      )}
    </div>
  );
}
