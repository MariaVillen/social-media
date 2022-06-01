import { Avatar } from "@mui/material";
import classes from "./ReportPannel.module.scss";
import {Link } from "react-router-dom";
import AdminReportCard from "../admin-report-card/AdminReportCard.component";
import CreateReport from "../create-report/CreateReport";

function ReportPannel() {
  return (
   <AdminReportCard/>
  );
}

export default ReportPannel;
