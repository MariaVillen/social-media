import classes from './Login.module.scss';
import LoginForm from '../../components/login-form/LoginForm';
import SignUpForm from '../../components/singup-form/SignUpForm';
import Logo from '../../images/logos/icon-left-fontre.png';

import {useState} from 'react';

export default function Login() {

    const [isLoginView, setIsLoginView] = useState(true);

    const changeViewHandler = (newViewState)=>{
        setIsLoginView(newViewState);
    }


  return (
    <div className={classes.login}>
        <div className={classes.wrapper}>
            <div className={classes.login_title}>
                <div className={classes.logo}>
                    <img src={Logo} alt="Groupomania, reséau social d'enterprise" />
                </div>
                <span className={classes.description}>
                    Commencez à partager avec vos collègues!
                </span>
            </div>
            <div className={classes.login_body}>
                <div className={classes.login_body_form}>
                    {isLoginView ? 
                    <LoginForm onChangeFormView={changeViewHandler}/> :
                    <SignUpForm onChangeFormView={changeViewHandler}/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
