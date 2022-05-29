import classes from "./ProfileForm.module.scss";
import { NoAccounts, LockReset } from "@mui/icons-material";
import TextareaForm from "../textarea-form/TextareaForm.component";
import ImageForm from "../image-form/ImageForm";


export default function ProfileForm() {


  return (
    <div>
      <div className={classes.profileForm}>
        <div className={classes.sidebarList}>
          <TextareaForm className={classes.edit}/>
          <ImageForm
            className={classes.imageEdit}
            imageName="cover"
            labelDesc="Modifier l'en tête."
          />
          <ImageForm
            className={classes.imageEdit}
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
