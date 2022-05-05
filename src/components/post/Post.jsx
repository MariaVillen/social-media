import classes from "./Post.module.scss";
import { MoreVert, FavoriteBorder, ThumbUp } from "@mui/icons-material";

export default function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.post_wrapper}>
        <div className={classes.post_header}>
          <div className={classes.post_profile}>
            <img
              className={classes.post_profile_image}
              src="/assets/persons/v3_0014506.png"
              alt="person"
            />
            <span className={classes.post_profile_username}>Jhon Doe</span>
            <span className={classes.post_date}>5 min ago</span>
          </div>
          <div className={classes.post_menu}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.post_body}>
          <span className={classes.post_body_text}>Hey first post!</span>
          <img src="/assets/posts/paisaje2.jpg" alt="" />
        </div>
        <div className={classes.post_footer}>
          <div className={classes.post_likes}>
            <FavoriteBorder className={classes.likeIcon} />
            <ThumbUp className={classes.likeIcon} />
            <span className={classes.likeCounter}>32 people liked it!</span>
          </div>
          <div className={classes.post_comments}>
            <span>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
