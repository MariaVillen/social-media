import { useState } from "react";

import classes from "./Login.module.scss";
import Logo from "../../images/logos/icon-left-fontre.png";

import LoginForm from "../../components/login-form/LoginForm";
import SignUpForm from "../../components/singup-form/SignUpForm";

// Login page presentation. Access to login or register.

export default function Login(props) {
  const [isLoginView, setIsLoginView] = useState(true);

  // Changes between login and register forms
  const changeViewHandler = (newViewState) => {
    setIsLoginView(newViewState);
  };

  return (
    <div className={classes.login}>
      <div className={classes.login_wrapper}>
        <div className={classes.login_title}>
          <div className={classes.login_title_logo}>
            <img src={Logo} alt="Groupomania, reséau social d'enterprise" />
          </div>
          <span className={classes.login_title_description}>
            Commencez à partager avec vos collègues!
          </span>
        </div>
        <div className={classes.login_body}>
          <div className={classes.login_body_form}>
            {isLoginView ? (
              <LoginForm
                onLogin={props.onLogin}
                onChangeFormView={changeViewHandler}
              />
            ) : (
              <SignUpForm onChangeFormView={changeViewHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
