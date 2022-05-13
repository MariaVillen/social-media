import { Favorite, Close } from "@mui/icons-material";
import { useState } from "react";
import classes from "./PostComment.module.scss";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import UserCard from "../../components/userCard/UserCard.component";

export default function PostComment(props) {
  /**
   * @EventHandler
   * @name submitHandler
   * @param {*} event 
   */
  const submitHandler = (event) => {
    event.preventDefault();
    //const password = event.target.password.value;
  };

  return (
    <>
      <div className={classes.container}>

        <form onSubmit={submitHandler}>
          <div className={classes.wrapper}>

            <div className={classes.shareHeader}>
              <UserCard 
                username="MyName" 
                profilePicture="/assets/persons/8.jpeg"
                hideName
              />
        
              <div className={classes.shareHeader_content}>
                <TextareaRezise name="textComment" placeHolder={props.placeHolder} className={classes.shareHeader_content_edit} autoFocus/>
              </div>
        
            </div>

            <hr className={classes.separator} />
        
            <div className={classes.shareFooter}>
              <div className={classes.shareFooter_options}>

                <div className={classes.shareFooter_option}>
                  <Favorite htmlColor="tomato" className={classes.shareFooter_option_icon} />
                  <span className={classes.shareFooter_option_text}>1 like it</span>
                </div>

                <button className={classes.share_btn}>Publier</button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}
