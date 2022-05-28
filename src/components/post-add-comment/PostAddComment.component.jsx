import classes from "./PostAddComment.module.scss";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import UserCard from "../userCard/UserCard.component";
import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function PostComment({
  userName,
  userImage,
  postId,
  loadComments,
  setLoadComments,
  totalComments,
  setTotalComments,
  placeHolder,
}) {
  const textRef = useRef();
  const [text, setText] = useState("");

  // Api
  const axiosPrivate = useAxiosPrivate();

  
  useEffect(() => {
    textRef.current.focus();
  }, []);


  const submitHandler = (event) => {
    event.preventDefault();

    if (text) {
      axiosPrivate
        .post("/comment", { content: text, postId: postId })
        .then(() => {
          setText("");
          setTotalComments(totalComments + 1);
          setLoadComments(!loadComments);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={classes.addComment}>
      <form>
        <div className={classes.addComment_container}>
          <UserCard username={userName} profilePicture={userImage} hideName />
          <div className={classes.addComment_text}>
            <TextareaRezise
              name="textOfComment"
              innerRef={textRef}
              onChange={(e) => setText(e.target.value)}
              placeHolder="À quoi penses-tu?"
              className={classes.addComment_edit}
              text={text}
            />
          </div>
        </div>
        <div className={classes.btn}>
          <button
            type="submit"
            onClick={submitHandler}
            className={classes.btn_submit}
          >
            Publier
          </button>
        </div>
      </form>
    </div>
  );
}
