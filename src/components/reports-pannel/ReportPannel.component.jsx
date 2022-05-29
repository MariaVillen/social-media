import { Avatar } from "@mui/material";
import classes from "./ReportPannel.module.scss";

function ReportPannel() {
  return (
    <div className={classes.reportAdminCard}>
      <div className={classes.reportAdminCard_header}>
        <Avatar />
        <div>Created: 28/05/2027</div>
      </div>
      <div className={classes.reportAdminCard_main}>
        <div className={classes.reportAdminCard_body}>
          <div className={classes.reportAdminCard_body_title}>Signalement</div>
          <div className={classes.reportAdminCard_body_report}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            dolores temporibus debitis sint. Magnam iste et est nihil in,
            blanditiis dignissimos optio explicabo sit quae vel nostrum, laborum
            laboriosam! Provident!
          </div>
        </div>
        <div className={classes.reportAdminCard_footer}>
          <div>
            Aller au message signalé          </div>
            <div>State:</div>

        </div>
      </div>
    </div>
  );
}

export default ReportPannel;
