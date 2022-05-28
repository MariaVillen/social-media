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
  const [ user, users ] = useOutletContext();
  const [ loadPosts, isLoadPosts] = useState(true);

  return (
    <div className={classes.home_container}>
      {tablet ? <Sidebar className={classes.home_sidebar} user={user} users={users} /> : <></>}
      <div className={classes.home_feed_content}>
        <Share name={user.name} isLoadPosts={isLoadPosts} loadPosts = {loadPosts} userImage={user.profilePicture} userId={user.id}/>
        <Feed user={user} loadPosts = {loadPosts} isLoadPosts={isLoadPosts}/>
      </div>
      {pc ? (
        <Rightbar className={classes.home_more_comment_content} />
      ) : (
        <></>
      )}
    </div>
  );
}
