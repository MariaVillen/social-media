import classes from "./CreateReport.module.scss";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";

export default function CreateReport({ messageId, typeMessage, setOnReport }) {
  const textRef = useRef();
  const [text, setText] = useState("");

  // Api
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const cancelHandler = (e)=>{
    e.preventDefault();
    setText("");
    setOnReport(false);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if (text) {
      let reportObject;
      if (typeMessage === "post") {
        reportObject = {reason: text, postId: messageId}
      } else if(typeMessage === "comment") {
        reportObject = {reason: text, commentId: messageId}
      } else {
        console.log("Error: type de commentaire non indiqué");
      }

      axiosPrivate
        .post("/report", reportObject)
        .then(() => {
          setText("");
          setOnReport(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("indiquez la cause");
    }

  };

  return (
        <div className={classes.createReport}>
          <div className={classes.createReport_card}>
          <div className={classes.createReport_header}>
          <p> Signaler cette publication </p>
          </div>
          <form>
            <div className={classes.createReport_body}>
              <p> Indiquez la raison du singalement:</p>
              <div className={classes.createReport_text}>
                <TextareaRezise
                  name="textOfComment"
                  innerRef={textRef}
                  onChange={(e) => setText(e.target.value)}
                  placeHolder="Pour quoi vous signalez cette publication?"
                  className={classes.createReport_edit}
                  text={text}
                />
              </div>
            </div>
            <div className={classes.btn}>
            <button
                onClick={cancelHandler}
                className={classes.btn_cancel}
              >
                Annuler
              </button>
              <button
                type="submit"
                onClick={submitHandler}
                className={classes.btn_submit}
              >
                Signaler
              </button>
            </div>
          </form>
          </div>
        </div>)
}
