import classes from "./ProfileForm.module.scss";
import { useState } from "react";
import { NoAccounts, LockReset } from "@mui/icons-material";
import TextareaForm from "../textarea-form/TextareaForm.component";
import ImageForm from "../image-form/ImageForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import Portal from "../portal/Portal";
import Modal from "../modal/Modal";

export default function ProfileForm( {userProfile}) {

  const axios = useAxiosPrivate();
  const navigate = useNavigate();


  const [confirm, setConfirm ] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const deleteAccountHandler = async (e)=> {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions

    setOnModal(true);
    if (confirm) {
    try{
      const result = await axios.delete(`/user/${userProfile.id}`);
      if (result) {
        navigate("/login", { repalce: true }); }
        console.log("delete user");
    } catch(err) {
      console.log("Erreur en supprimir compte ", err);
    }
    }
    else {
      console.log("Suppresion annulée");
    }
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
      {onModal 
        ?<Portal>
          <Modal setConfirm={setConfirm} setOnModal = {setOnModal} message="Vous etes pour supprimer votre compte. Confirmer la suppresion de compte."></Modal>
        </Portal>
        : null
      }
    </div>
  );
}
