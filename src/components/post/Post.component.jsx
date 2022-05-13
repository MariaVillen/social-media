import classes from "./Post.module.scss";
import { useState } from "react";
import { Edit, Delete, Report, Favorite, FavoriteBorderOutlined, Comment } from "@mui/icons-material";
import Share from "../share/Share.component";
import UserCard from "../../components/userCard/UserCard.component";

export default function Post(props) {

  // Likes
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setisLiked] = useState(false);

  const likeHandler = () => {
    setLike( isLiked ? like-1 : like + 1);
    setisLiked(!isLiked);
  }

  const [onEdit, setOnEdit] = useState(false)
  const editHandler = () => {
    setOnEdit(true);
  }

  return (
    <div className={classes.post}>
      <div className={classes.post_wrapper}>
        {(onEdit)? 
        <div className={classes.modal}>
          <Share content={props.post?.desc} photo={props.post?.photo}/>
        </div>
        :null}
        <div className={classes.post_header}>
          <div className={classes.post_profile}>
            <UserCard 
              hideName
              profilePicture={props.user.profilePicture}
              username={props.user.username}
            />
            <span className={classes.post_date}>{props.post.date}</span>
          </div>
          <div className={classes.post_menu}>
            <span className={classes.post_menu_content_icon}>
              <Delete className={classes.post_menu_icon} />
            </span>

            <span className={classes.post_menu_content_icon}>
              <Edit onClick={editHandler} className={classes.post_menu_icon} />
            </span>

            <span className={classes.post_menu_content_icon}>
            <Report className={classes.post_menu_icon} />
            </span>

          </div>
        </div>
        <div className={classes.post_body}>

          <span className={classes.post_body_text}>{props.post?.desc}</span>
          <img src={props.post.photo} alt="" />
          
        </div>
        <div className={classes.post_footer}>
          <div className={classes.post_likes}>
            <button className={classes.favorite} onClick={likeHandler}>
              {(isLiked) ? <Favorite className={classes.likeIcon} /> :
              <FavoriteBorderOutlined className={classes.likeIcon}/>}
            </button>
            <span className={classes.likeCounter}>
              { like } people liked it!
            </span>
          </div>
          <div className={classes.post_comments}>
            <button className={classes.comment} onClick={likeHandler}>
              <Comment className={classes.commentIcon} /> 
              </button>
            <div className={classes.post_comments}>
              <span>{props.post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
