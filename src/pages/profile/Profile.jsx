import classes from "./Profile.module.scss";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
        <div className={classes.right}>
          <div className={classes.right_top}>
              <div className={classes.profile_header}>
            <img
              className={classes.profile_coverImage}
              src="/assets/posts/3.jpeg"
              alt=""
            />
            <img
              className={classes.profile_userImage}
              src="/assets/persons/7.jpeg"
              alt=""
            />
            </div>
            <div className={classes.profile_info}>
                <h4 className={classes.profile_name}>NAME</h4>
                <span className={classes.profile_description}>
                    Hello My friends!
                </span>
            </div>
          </div>
          <div className={classes.right_bottom}>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
