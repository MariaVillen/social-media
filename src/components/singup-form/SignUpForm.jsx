/* eslint-disable react-hooks/exhaustive-deps */
import classes from "./SignUpForm.module.scss";
import {useRef, useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import api from "../../api/axios";

const SignUpForm = () => {

  // Navigation

  const navigate = useNavigate();

 // Validation
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!$%@\.]).{8,24}$/;
  const NAME_REGEX =/^[A-Za-zàâçéèêëîïôûùüÿñæœ' ]+/; 
  const EMAIL_REGEX= /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  
  // Referencies
  const emailRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const errRef = useRef();
  const condRef = useRef();


  // Error States
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [conditions, setConditions] =  useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // focus on user input
  useEffect( () => {
    emailRef.current.focus();
  },[])

  // Validation
  useEffect(()=>{
    setValidEmail(EMAIL_REGEX.test(email));
  },[email])

  useEffect(()=>{
    setValidName(NAME_REGEX.test(name));
  },[name])

  useEffect(()=>{
    setValidLastName(NAME_REGEX.test(lastName));
  },[lastName])

  useEffect(()=>{
    setValidPwd(PWD_REGEX.test(pwd));
  },[pwd])
  

  // Reset error messages to '' 
  useEffect(()=>{
    setErrMsg('');
  }, [email, pwd, name, lastName, conditions])


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/signup", JSON.stringify({lastName: lastName, name: name, email: email, password: pwd}));
      console.log(response.data);
      console.log(response.accessToken);
      setSuccess(true);
      setEmail('')
      setPwd('')
      setName('')
      setLastName('')
      navigate('/login')
      
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg('Pas de réponse du serveur.');
      } else if (err.response?.status === 400) {
        console.log(err.message);
        setErrMsg("Email déjà utilisé")
      } else {
        console.log(err.message);
        setErrMsg('La connexion a échoué');
      }
      errRef.current.focus();
    }
  };

  return (
    <><section className={classes.auth}>

      <h1>S'inscrire</h1>
      <p ref={errRef} className={errMsg ? classes.errMsg : classes.offscreen } aria-live="assertive">{errMsg}</p><form onSubmit={submitHandler}>
        <div className={classes.auth_control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
          <p className={(email && !validEmail) ? classes.instructions : classes.offscreen}>
            Mensaje de Instrucciones
          </p>
        </div>

        <div className={classes.auth_control}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required />
          <p className={(name && !validName) ? classes.instructions : classes.offscreen}>
            Mensaje de Instrucciones
          </p>
        </div>

        <div className={classes.auth_control}>
          <label htmlFor="lastName">Prénom</label>
          <input
            type="text"
            id="lastName"
            ref={lastNameRef}
            autoComplete="off"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required />
          <p className={(lastName && !validLastName) ? classes.instructions : classes.offscreen}>
            Mensaje de Instrucciones
          </p>
        </div>

        <div className={classes.auth_control}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={e => setPwd(e.target.value)}
            value={pwd}
            required />
          <p className={(pwd && !validPwd) ? classes.instructions : classes.offscreen}>
            Mensaje de Instrucciones
          </p>
        </div>

        <div className={classes.auth_check}>
          <input
            type="checkbox"
            ref={condRef}
            onChange={(e) => { setConditions(!conditions)}}
            id="conditions"
            value={conditions}
            required />
          <label htmlFor="conditions">
            J'accept les conditions génerales et la politique d'utilisation des
            données.
          </label>
        </div>

        <div className={classes.auth_actions}>
          <button type="submit" className={classes.auth_actions_link} disabled={!(validEmail && validLastName && validName && validPwd && conditions)}>Créer un compte.</button>
          <Link className={classes.auth_actions_toggle} to="/login">
            Connectez-vous avec un compte existant
          </Link>
        </div>
      </form>
    </section></>
  );
};

export default SignUpForm;
