
import classes from "./CloseFriend.module.scss";

export default function CloseFriend(props) {
  return (
    <li className={classes.friend}>
      <img
        src={props.user.profilePicture}
        alt={props.user.username}
        className={classes.profilePictureImg}
      />
      <span className={classes.friendName}>{props.user.username}</span>
    </li>
  );
}
