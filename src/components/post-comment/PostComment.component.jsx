import classes from "./PostComment.module.scss";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import { useState, useRef, useEffect } from "react";
import {
  MoreHoriz,
  Favorite,
  FavoriteBorderOutlined,
  CheckCircle,
  Cancel
} from "@mui/icons-material";
import Avatar from "../avatar/avatar.component";
import useAuth from "../../hooks/useAuth";


export default function PostComment({className, postId, loadComments, setLoadComments, comment})  {


  const {auth} = useAuth();


  // Like Handler
  const [like, setLike] = useState(comment.likes);
  const [isLiked, setisLiked] = useState(false);
  
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };

  const deleteHandler = ()=>{}
  

  // EDIT 
  const [textComment, setTextComment] = useState(comment.content);
  const contentRef = useRef();
  const [onEdit, setOnEdit] = useState(false);
  const editHandler=()=> {

  }

  const allowEditionHandler = ()=>{
    setOnEdit(true);
    contentRef.current.focus();
  }
  const cancelHandler = ()=>{
    setOnEdit(false);
    setTextComment(comment.content);
    setIsMenuActive(false);
    contentRef.current.style.height = "inherit";
  }


  //REPORT
  
  const reportHandler = ()=>{}


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
              <Avatar userName = {comment.user.name} userImage={comment.user.profilePicture} userId = {comment.user.id}/> 
            </div>

            <div className={classes.body}>
              <span>{comment.user.name}</span>
              <TextareaRezise
                name="textComment"
                innerRef={contentRef}
                className={classes.edit}
                onChange={(e)=>setTextComment(e.target.value)}
                text= {textComment}
                readOnly = {!onEdit}
              />
            </div>
            <div className={classes.menu}>
              <MoreHoriz
                onClick={menuViewHandler}
                className={classes.comment_menu_icon}
              />

              {isMenuActive ? (
                <ul className={classes.dropdown}>
                  {auth.user.id === comment.userId 
                  ? <><li onClick={allowEditionHandler}>Editer</li>
                    <li onClick={deleteHandler}>Supprimer</li></> 
                  : null}

                 {auth.user.id !== comment.userId 
                    ? <li onClick={reportHandler}>Signaler</li>
                    : null }
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

            <span>{comment.createdAt}</span>
          </div>
          {onEdit 
            ? <div> 
              <CheckCircle onClick={submitHandler}/>
              <Cancel onClick={cancelHandler}/>
              </div>
            : null
          } 
        </div>
      </div>
    </>
  );
}
