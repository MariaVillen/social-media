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

export default function ProfileCard(props) {
  const sizeCard = props.sizeCard || "small";

  return (
    <div className={classes[sizeCard]}>
      <div className={classes.header}>
        <div className={classes.container_cover}>
          <div className={classes.innerCover}>
          { props.cover? <img
            className={classes.coverImage}
            src={props.cover}
            alt={props.name}
          /> : <></>}
          </div>
        </div>
        <Link to={`profile/${props.userId}`}>    
        <div className={classes.container_avatar}>
            {props.avatar ? 
          <img
            className={classes.userImage}
            src={props.avatar}
            alt={props.name}
          /> : <img
          className={classes.userImage}
          src={DefaultAvatar}
          alt={props.name}
        />}
        </div>
        </Link>     
      </div>
      <div className={classes.info}>
        <h4 className={classes.name}>{props.username}</h4>
        <span className={classes.description}>{props.bio? props.bio : "Salut mes amis!"}</span>
      </div>
    </div>
  );
}
