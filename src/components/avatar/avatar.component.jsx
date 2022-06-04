
import classes from "./avatar.module.scss";
import DefaultAvatar from "../../images/avatar-default.png";
import {Link} from "react-router-dom";


export default function Avatar({userName, userImage, userId, sizePicture, className}) {
  

  const onerrorLoad = (e) => {
    e.target.src = DefaultAvatar;
    e.target.onError = false;
  }

  return (
    <>
    <Link area-label={userName} className={className || classes.conteiner} to={`/profile/${userId}`}>
      <img
        src={(userImage) ? userImage : DefaultAvatar}
        alt={userName}
        onError={onerrorLoad}
        className={classes.profilePictureImg}
        width={sizePicture || "48px" }
        height={sizePicture || "48px" }
      />
      </Link>
    </>
  );
   
}
