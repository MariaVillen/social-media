import classes from "./Home.module.scss";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Rightbar from "../../components/rightbar/Rightbar.component";
import Share from "../../components/share/Share.component";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Outlet, useOutletContext } from "react-router-dom";
import ProfileCard from "../../components/profile-card/ProfileCard";


// Home Page

export default function Home(props) {
  
  const {user, users} = useOutletContext();
  const tablet = useMediaQuery("(min-width: 768px)");
  const pc = useMediaQuery("(min-width: 1200px)");
  return (
    <div className={classes.home_container}>
      {tablet ? <Sidebar className={classes.home_sidebar} user={user} users={users} /> : <></>}
      <div className={classes.home_feed_content}>
        <Share name={user.name} avatar={user.profilePicture}/>
        <Outlet context={{user}}/>
      </div>
      {pc ? (
        <Rightbar className={classes.home_more_comment_content} />
      ) : (
        <></>
      )}
    </div>
  );
}
