import HomePage from "../home/Home";
import Login from "../login/Login";

const InitPage = (props) => {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return <HomePage />;
    }
    return <Login/>;
  }

export default InitPage;