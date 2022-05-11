import classes from './ProfileCard.module.scss';

export default function ProfileCard(props) {

  return (
    <div className={classes.profile_card}>
    <div className={classes.profile_header}>
      <div className={classes.profile_container_cover}>
      <img
        className={classes.profile_coverImage}
        src="/assets/covers/1.jpg"
        alt=""
      />
      </div>
      <div className={classes.profile_container_avatar}>
      <img
        className={classes.profile_userImage}
        src="/assets/persons/8.jpeg"
        alt=""
      />
      </div>
    </div>
    <div className={classes.profile_info}>
      <h4 className={classes.profile_name}>NAME</h4>
      <span className={classes.profile_description}>
        Hello My friends!
      </span>
    </div>
  </div>
  )
}
