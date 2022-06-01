import classes from "./ProfileForm.module.scss";
import { NoAccounts, LockReset } from "@mui/icons-material";
import TextareaForm from "../textarea-form/TextareaForm.component";
import ImageForm from "../image-form/ImageForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

export default function ProfileForm( {userProfile}) {

  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const deleteAccountHandler = ()=> {
      // eslint-disable-next-line no-unused-expressions
      //async ()=>{
       // const result = await axios.delete(`/api/user/${userProfile}`);
        //if (result) {
        //navigate("/login", { repalce: true }); }
      console.log("delete user");

  }

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

      <button onClick={deleteAccountHandler} className={`${classes.linkList} ${classes.linkList_danger}`}>
        <NoAccounts className={classes.sidebarIcon} />
        <span className={classes.sidebarListItemText}>Supprimer compte.</span>
      </button>
    </div>
  );
}
