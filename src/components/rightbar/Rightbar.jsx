import classes from './Rightbar.module.scss';
import { Cake } from '@mui/icons-material';

export default function Rightbar() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.birthday}>
          <Cake className={classes.birthday_icon} />
          <span className={classes.birthday_text}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="Ad" className={classes.ad} />   
        <h4 className={classes.title}>
          Online Friends
        </h4>
        <ul className={classes.friendList}>
          <li className={classes.friend}>
            <div className={classes.profile_image}>
              <img src="/assets/persons/v3_0634863.png" alt="" />
              <span className={classes.online}></span>
            </div>
            <span className={classes.username}>
              John Carter
            </span>
          </li>
          <li className={classes.friend}>
            <div className={classes.profile_image}>
              <img src="/assets/persons/v3_0634863.png" alt="" />
              <span className={classes.online}></span>
            </div>
            <span className={classes.username}>
              John Carter
            </span>
          </li>
          <li className={classes.friend}>
            <div className={classes.profile_image}>
              <img src="/assets/persons/v3_0634863.png" alt="" />
              <span className={classes.online}></span>
            </div>
            <span className={classes.username}>
              John Carter
            </span>
          </li>
          <li className={classes.friend}>
            <div className={classes.profile_image}>
              <img src="/assets/persons/v3_0634863.png" alt="" />
              <span className={classes.online}></span>
            </div>
            <span className={classes.username}>
              John Carter
            </span>
          </li>
          <li className={classes.friend}>
            <div className={classes.profile_image}>
              <img src="/assets/persons/v3_0634863.png" alt="" />
              <span className={classes.online}></span>
            </div>
            <span className={classes.username}>
              John Carter
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
