
import classes from "./UserCard.module.scss";

export default function UserCard(props) {

  const hideName = (props.hideName) ? false : true;

  return (
    <>
      <img
        src={props.profilePicture}
        alt={props.username}
        className={classes.profilePictureImg}
      />
      {(hideName) ? <span className={classes.friendName}>{props.username}</span> : null}
    </>
    );
   
}
