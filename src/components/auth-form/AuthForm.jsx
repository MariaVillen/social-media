import { useState } from 'react';
import LoginForm from '../login-form/LoginForm';
import SignUpForm from '../singup-form/SignUpForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
  }

  return (
    isLogin ? <LoginForm value={isLogin} loginState = {switchAuthModeHandler}/> : <SignUpForm value={isLogin} loginState = {switchAuthModeHandler}/>
  );
};

export default AuthForm;