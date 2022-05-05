import classes from "./Online.module.scss";


export default function Online(props) {
  return (
    <li className={classes.friend}>
      <div className={classes.profile_image}>
        <img src={props.user.profilePicture} alt={props.user.username} />
        <span className={classes.online}></span>
      </div>
      <span className={classes.username}>{props.user.username}</span>
    </li>
  );
}
