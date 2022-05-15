import classes from "./PostAddComment.module.scss";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import UserCard from "../userCard/UserCard.component";

export default function PostComment(props) {
  /**
   * @EventHandler
   * @name submitHandler
   * @param {*} event
   */
  const submitHandler = (event) => {
    event.preventDefault();
    //const password = event.target.password.value;
  };

  return (
    <div className={classes.addComment}>
      <UserCard
        username="MyName"
        profilePicture="/assets/persons/8.jpeg"
        hideName
      />
      <div className={classes.addComment_text}>
        <TextareaRezise
          name="textComment"
          placeHolder={props.placeHolder}
          className={classes.addComment_edit}
          autoFocus
        />
      </div>
    </div>
  );
}
