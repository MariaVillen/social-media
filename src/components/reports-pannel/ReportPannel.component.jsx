import { useEffect, useState } from "react";
import AdminReportCard from "../admin-report-card/AdminReportCard.component";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import classes from "./ReportPannel.module.scss";

function ReportPannel() {

  const axiosPrivate = useAxiosPrivate();
  const [reports, setReports ] = useState();
  const [isLoading, setIsLoading ] = useState();

  useEffect(  () => {

    let isMounted = true;
    const controller = new AbortController();

    const getReports = async ()=> {
      try {
        const response = await axiosPrivate.get("/report/", {signal: controller.signal})
        const data = response.data;
    
        if (isMounted) {
          // Stock data
          setReports(data);
          setIsLoading(false);
        } 
      
      } catch(err) {
        console.log(err.message);
      }
    }

    getReports();

    // if unmounted component
    return ()=> {
      isMounted=false;
      controller.abort();
    }
  }, []);


  return (
    <>
      { isLoading 
          ? <p>Loading...</p>
          : reports && (reports?.length > 0)
              ? reports.map(
                (r) => {
                  return (
                  <AdminReportCard
                    className = {classes.cards}
                    key={r.id}
                    report={r}
                  />
                )})
              : <p className={classes.notFound}>Pas de signalements trouvées.</p>
      }           
    </>
  );
}

export default ReportPannel;
