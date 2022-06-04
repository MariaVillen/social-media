
import {Link} from "react-router-dom";
import classes from "./avatar.module.scss";
import DefaultAvatar from "../../images/avatar-default.png";

// Avatar Element. Image of the user.
export default function Avatar({ userName, userImage, userId, sizePicture, className }) {
  
  // Shows a default image if there are an error loading the avatar image.
  const onerrorLoad = ( e ) => {
    e.target.src = DefaultAvatar;
    e.target.onError = false;
  }

  return (
    <Link area-label={userName} className={className || classes.avatar} to={`/profile/${userId}`}>
      <img
        src={ userImage ? userImage : DefaultAvatar}
        alt={ userName }
        onError={ onerrorLoad }
        className={ classes.avatar_image}
        width={ sizePicture || "48px" }
        height={ sizePicture || "48px" }
      />
    </Link>
  );
   
}
