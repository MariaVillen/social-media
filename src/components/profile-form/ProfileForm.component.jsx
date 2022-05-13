import classes from './ProfileForm.module.scss'
import { NoAccounts, AutoStories, LockReset, Photo} from "@mui/icons-material";


export default function ProfileForm() {
  return (

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
  )
}


