import classes from './ProfileCard.module.scss';

export default function ProfileCard(props) {  

  const sizeCard = props.sizeCard || 'small' 

  return (
    <div className={classes[sizeCard]}>
      <div className={classes.header}>
        <div className={classes.container_cover}>
        <img
          className={classes.coverImage}
          src="/assets/covers/1.jpg"
          alt=""
        />
        </div>
        <div className={classes.container_avatar}>
        <img
          className={classes.userImage}
          src="/assets/persons/8.jpeg"
          alt=""
        />
        </div>
    </div>
    <div className={classes.info}>
      <h4 className={classes.name}>NAME</h4>
      <span className={classes.description}>
        Hello My friends!
      </span>
    </div>
  </div>
  )
}
