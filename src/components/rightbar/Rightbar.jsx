import classes from './Rightbar.module.scss';
import { Cake } from '@mui/icons-material';
import { Users } from '../../dummyData';
import Online from '../online/Online';


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
          {Users.map((user) => {
            return (<Online key={ user.id } user={user} />)
          })}
        </ul>
      </div>
    </div>
  )
}
