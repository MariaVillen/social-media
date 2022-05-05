import classes from './Topbar.module.scss';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className = {classes.container}>
        <div className = {classes.container_left}>
            <span className={classes.logo} >Groupama</span>
        </div>
        <div className={classes.container_center}>
          <div className={classes.searchBar}>
          <Search className = {classes.search_icon} />
          <input placeholder="Search for friends, post or video" type="text" className={classes.search_input} />
          </div>
        </div>
        <div className={classes.container_right}>
          <div className={classes.topbarLinks}>
            <span className={classes.topbarLink}>Homepage</span>
            <span className={classes.topbarLink}>Timeline</span>
          </div>
          <div className={classes.topbarIcons}>
            <div className={classes.topbarIcons_item}>
              <Person />
              <span className={classes.topbarIcons_badge}>
                1
              </span>
            </div>
            <div className={classes.topbarIcons_item}>
              <Chat />
              <span className={classes.topbarIcons_badge}>
                2
              </span>
            </div>
            <div className={classes.topbarIcons_item}>
              <Notifications />
              <span className={classes.topbarIcons_badge}>
                1
              </span>
            </div>
          </div>
          <img src="/assets/persons/v3_0014506.png" alt="Profile" className={classes.topbar_img} />
        </div>
    </div>
  )
}
