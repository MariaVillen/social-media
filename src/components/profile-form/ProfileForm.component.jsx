import classes from "./ProfileForm.module.scss";
import { NoAccounts, LockReset } from "@mui/icons-material";
import TextareaForm from "../textarea-form/TextareaForm.component";
import ImageForm from "../image-form/ImageForm";

export default function ProfileForm({ user }) {


  

  return (
    <div>
      <div className={classes.profileForm}>
        <div className={classes.sidebarList}>
          <TextareaForm className={classes.edit} user={user} />
          <ImageForm
            className={classes.imageEdit}
            user={user}
            imageName="cover"
            labelDesc="Modifier l'en tête."
          />
          <ImageForm
            className={classes.imageEdit}
            user={user}
            imageName="avatar"
            labelDesc="Modifier l'avatar."
          />
        </div>
      </div>

      <div className={classes.linkList}>
        <LockReset className={classes.sidebarIcon} />
        <span className={classes.sidebarListItemText}>
          Changer Mot de Passe
        </span>
      </div>

      <div className={`${classes.linkList} ${classes.linkList_danger}`}>
        <NoAccounts className={classes.sidebarIcon} />
        <span className={classes.sidebarListItemText}>Supprimer compte.</span>
      </div>
    </div>
  );
}
