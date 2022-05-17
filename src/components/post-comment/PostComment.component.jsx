import classes from "./PostComment.module.scss";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import { useState } from "react";
import {
  MoreHoriz,
  Favorite,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

export default function PostComment(props) {
  // Like Handler
  const [like, setLike] = useState(props.comment.like);
  const [isLiked, setisLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };

  // Menu Handler

  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuViewHandler = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();
    //const password = event.target.password.value;
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.central}>
          <div className={classes.central_container}>
            <div className={classes.avatar}>
              <img src={props.user.profilePicture} alt={props.user.username} />
            </div>

            <div className={classes.body}>
              <span>{props.user.username}</span>

              <TextareaRezise
                name="textComment"
                placeHolder={props.placeHolder}
                className={classes.edit}
                textRezise={props.comment.desc}
                readOnly
              />
            </div>
            <div className={classes.menu}>
              <MoreHoriz
                onClick={menuViewHandler}
                className={classes.comment_menu_icon}
              />

              {isMenuActive ? (
                <ul className={classes.dropdown}>
                  <li>Editer</li>
                  <li>Supprimer</li>
                  <li>Signaler</li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.likes}>
            <button className={classes.favorite} onClick={likeHandler}>
              {isLiked ? (
                <Favorite className={classes.favorite_icon} />
              ) : (
                <FavoriteBorderOutlined
                  className={classes.comment_favorite_icon}
                />
              )}
            </button>

            <span className={classes.counter}>{like}</span>

            <span>{props.comment.date}</span>
          </div>
        </div>
      </div>
    </>
  );
}
