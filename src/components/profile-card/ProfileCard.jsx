import classes from "./ProfileCard.module.scss";

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
          <img
            className={classes.coverImage}
            src={props.cover}
            alt={props.username}
          />
        </div>
        <div className={classes.container_avatar}>
          <img
            className={classes.userImage}
            src={props.avatar}
            alt={props.username}
          />
        </div>
      </div>
      <div className={classes.info}>
        <h4 className={classes.name}>{props.username}</h4>
        <span className={classes.description}>Hello My friends!</span>
      </div>
    </div>
  );
}
