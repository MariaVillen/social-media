import classes from "./Post.module.scss";
import { MoreVert, FavoriteBorder, ThumbUp } from "@mui/icons-material";

export default function Post(props) {

  return (
    <div className={classes.post}>
      <div className={classes.post_wrapper}>
        <div className={classes.post_header}>
          <div className={classes.post_profile}>
            <img
              className={classes.post_profile_image}
              src={props.user.profilePicture}
              alt={props.user.username}
            />
            <span className={classes.post_profile_username}>{props.user.username}</span>
            <span className={classes.post_date}>{props.post.date}</span>
          </div>
          <div className={classes.post_menu}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.post_body}>
          <span className={classes.post_body_text}>{props.post?.desc}</span>
          <img src={props.post.photo} alt="" />
        </div>
        <div className={classes.post_footer}>
          <div className={classes.post_likes}>
            <FavoriteBorder className={classes.likeIcon} />
            <ThumbUp className={classes.likeIcon} />
            <span className={classes.likeCounter}>{props.post.like} people liked it!</span>
          </div>
          <div className={classes.post_comments}>
            <span>{props.post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
