
import classes from "./UserCard.module.scss";

// User Card. 
// Property hideName true in component will hide the name of the user.
// Property sizePicture will set the size of the image (values accepted: {string} clasic css mesures).

export default function UserCard(props) {

  const hideName = (props.hideName) ? false : true;

  return (
    <>
      <img
        src={props.profilePicture}
        alt={props.username}
        className={classes.profilePictureImg}
        width={props.sizePicture || "48px" }
        height={props.sizePicture || "48px" }
      />
      {(hideName) ? <span className={classes.friendName}>{props.username}</span> : null}
    </>
    );
   
}
