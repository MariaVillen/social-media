import classes from './Addpost.module.scss';
import { Close, Photo } from '@mui/icons-material';

export default function Addpost(props) {

    // props createPostIsOpen a manejar por el padre para cerrar el componente
    function handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    }

    function closePost(){
        props.closeCreatePost(false);
    }

  return (
    <div className={`${classes.container} ${props.className}`}>
        <div className={classes.createPub}>

            <div className={classes.header}>
                <h2>Créer une publication</h2>
                <Close onClick={closePost} className={classes.closeIcon}/>
            </div>

            <div className={classes.body}>
                <div className={classes.avatar}>
                    <img src="./assets/persons/8.jpeg" alt="Me"/>
                    <span>My Name</span>
                </div>
                <form>
                    <textarea onKeyDown={handleKeyDown} placeholder='À quoi penses-tu?' className={classes.edit} autoFocus/>
                    <button className={classes.ajoutePhoto}>
                        <Photo className={classes.icon}/> <span>Ajouter une image</span>
                    </button>
                    <button type="submit" className={classes.submitButton}>Publier</button>
                </form>
            </div>

        </div>
    </div>
  )
}
