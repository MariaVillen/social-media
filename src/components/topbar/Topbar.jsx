import classes from './Topbar.module.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className = {classes.topbarContainer}>
        <div className = {classes.topbarLeft}>
            <span className={classes.logo} >Groupama</span>
        </div>
        <div className={classes.topbarCenter}>
          <div className={classes.searchBar}>
          <Search className = {classes.searchIcon} />
          <input placeholder="Search for friends, post or video" type="text" className={classes.searchInput} />
          </div>
        </div>
        <div className={classes.topbarRight}>
          <div className={classes.topbarLinks}>
            <span className={classes.topbarLink}>Homepage</span>
            <span className={classes.topbarLink}>Timeline</span>
          </div>
          <div className={classes.topbarIcons}>
            <div className={classes.topbarIconItem}>
              <Person />
              <span className={classes.topbarIconBadge}>
                1
              </span>
            </div>
            <div className={classes.topbarIconItem}>
              <Chat />
              <span className={classes.topbarIconBadge}>
                2
              </span>
            </div>
            <div className={classes.topbarIconItem}>
              <Notifications />
              <span className={classes.topbarIconBadge}>
                1
              </span>
            </div>
          </div>
          <img src="/assets/persons/v3_0014506.png" alt="Profile" className={classes.topbarImg} />
        </div>
    </div>
  )
}
