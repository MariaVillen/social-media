import classes from "./Modal.module.scss";

// Show a form to allow user create a report to a comment or post.

export default function Modal({ message, setOnModal, setConfirm }) {


  const cancelHandler = ()=>{
    setConfirm(false);
    setOnModal(false);
  }

  const confirmHandler = ()=> {
    setConfirm(true);
    setOnModal(false);
  }
  

  return (
        <div className={classes.modal}>
          <div className={classes.modal_card}>

            <div className={classes.modal_header}>
              <p> {message}</p>
            </div>
            <div className={classes.modal_footer}>
            <button
              className={`${classes.btn} ${classes.btn_cancel}`}
              onClick={cancelHandler}>Annuler
            </button>
            <button
              onClick={confirmHandler}
              className={`${classes.btn} ${classes.btn_submit}`}
            > Confirmer</button>
          </div>
          </div>
        </div>)
}
