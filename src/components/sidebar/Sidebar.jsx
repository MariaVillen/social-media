import classes from "./Sidebar.module.scss";
import { NoAccounts, AutoStories, LockReset, Photo} from "@mui/icons-material";
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
import ProfileCard from '../profile-card/ProfileCard';

export default function Sidebar({className}) {
  return (
    <div className={`${classes.container} ${className}`}>
      <ProfileCard/>
      <div className={classes.wrapper}>
        <ul className={classes.sidebarList}>
        <li className={classes.sidebarListItem}>
            <AutoStories className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer biographie </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Photo className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer photo profile </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Photo className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer photo header </span>
          </li>
          <li className={classes.sidebarListItem}>
            <LockReset className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer Mot de Pas </span>
          </li>
          <li className={classes.sidebarListItem}>
            <NoAccounts className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Demander suppresion compte </span>
          </li>
        </ul>
        <hr className={classes.separator}/>
        <p className={classes.title}>Mes contacts</p>
        <ul className={classes.friendList}>

          { Users.map(
            (user) => { return <CloseFriend key={user.id} user = {user} />}
          ) }            

        </ul>

      </div>
    </div>
  );
}
