import classes from "./ProfileCard.module.scss";
import {Link} from "react-router-dom";
import DefaultAvatar from "../../images/avatar-default.png";

/**
 * @ReactComponent
 * @Property {String ('large' or 'small')} sizeCard // size of the card
 * @property {String} props.username // name of the user
 * @property {Url} props.cover // Cover Image of the user
 * @property {Url} props.avatar // avatar of the user
 * @property {String} props.bio // Biographie of the user
 * @param {*} props
 *
 * @returns
 */

export default function ProfileCard({userId, name, cover, lastName, avatar, bio, size}) {
  const sizeCard = size || "small";

  return (
    <div className={classes[sizeCard]}>
      <div className={classes.header}>
        <div className={classes.container_cover}>
          <div className={classes.innerCover}>
          { cover? <img
            className={classes.coverImage}
            src={cover}
            alt={name}
          /> : <></>}
          </div>
        </div>
        <Link to={`profile/${userId}`}>    
        <div className={classes.container_avatar}>
            {avatar ? 
          <img
            className={classes.userImage}
            src={avatar}
            alt={name}
          /> : <img
          className={classes.userImage}
          src={DefaultAvatar}
          alt={name}
        />}
        </div>
        </Link>     
      </div>
      <div className={classes.info}>
        <h4 className={classes.name}>{name} {lastName}</h4>
        <span className={classes.description}>{bio? bio : "Salut mes amis!"}</span>
      </div>
    </div>
  );
}
