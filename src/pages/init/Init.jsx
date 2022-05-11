
import Login from "../login/Login";
import Layout from "../layout/Layout";


const InitPage = (props) => {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return (
        <Layout/>
    )
    } else {
    return <Login/>
  }
  }

export default InitPage;