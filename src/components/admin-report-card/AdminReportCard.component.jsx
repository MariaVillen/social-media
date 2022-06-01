import { Avatar } from "@mui/material";
import classes from "./AdminReportCard.module.scss";
import {Link } from "react-router-dom";

function AdminReportCard() {
  return (
    <div className={classes.reportAdminCard}>
      <div className={classes.reportAdminCard_header}>
        <Avatar />
        <div className={classes.reportAdminCard_body_title}>Signalement</div>
        <div>Created: 28/05/2027</div>
      </div>
      <div className={classes.reportAdminCard_main}>
        <div className={classes.reportAdminCard_body}>
          <div className={classes.reportAdminCard_body_report}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            dolores temporibus debitis sint. Magnam iste et est nihil in,
            blanditiis dignissimos optio explicabo sit quae vel nostrum, laborum
            laboriosam! Provident!
          </div>
        </div>
        <div className={classes.reportAdminCard_footer}>
          <Link to="post/1">Aller au message signalé </Link>
          <form>
            <label>Etat: </label>
            <select> 
              <option>Non lu</option>
              <option>En cours</option>
              <option>Refusé</option>
              <option>Archivé</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminReportCard;
