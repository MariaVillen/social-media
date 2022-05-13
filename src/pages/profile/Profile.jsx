import classes from "./Profile.module.scss";
import Feed from "../../components/feed/Feed.component";
import ProfileCard from "../../components/profile-card/ProfileCard";

export default function Profile() {
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.right}>
          <div className={classes.right_top}>
            <ProfileCard sizeCard='large'/>
            {/* <div className={classes.profile_header}>
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
            </div> */}
          </div>
            <div className={classes.right_bottom}>
            <Feed />
            </div>
        </div>
      </div>
    </>
  );
}
