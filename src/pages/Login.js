import React, { useState, useEffect, Fragment, useContext } from 'react';
import LoginButtons from '../components/LoginButtons';
import { Redirect } from 'react-router';
import AppDataProvider from '../providers/AppDataProvider';

const Login = () => {
  const { appInfo, setAppInfo } = useContext(AppDataProvider);
  const [ userInfo, setUserInfo]  = useState(null);
  const userInfoSchema = {
    name: null,
    email: null,
    id: null,
    photo: null,
    fullName: null
  }

  useEffect(() => {
    setUserInfo(localStorage.getItem('session') || null);
  });

  const responseGoogle = e => {
    userInfoSchema.name = e.dt.uU;
    userInfoSchema.fullName = e.dt.Ve;
    userInfoSchema.email = e.dt.Nt;
    userInfoSchema.photo = e.dt.DJ;
    userInfoSchema.id = e.dt.LS;

    setUserInfo(userInfoSchema);

    setAppInfo({...appInfo, userInfo: userInfoSchema});
    
    localStorage.setItem('session', JSON.stringify(userInfoSchema));
  }

  const responseFacebook = e => { 
    if(e.status !== "unknown" && e.status !== "error") {
      
      userInfoSchema.name = e.name;
      userInfoSchema.email = e.email;
      userInfoSchema.photo = e.picture.data.url;
      userInfoSchema.id = e.userId;

      setUserInfo(userInfoSchema);
      setAppInfo({...appInfo, userInfo: userInfoSchema});

      localStorage.setItem('session', JSON.stringify(userInfoSchema));
    }
  }

  const responseGoogleFail = e => {
    localStorage.setItem('session', null);
  }

  return (
    <Fragment>
      { userInfo === null ? 
        <LoginButtons responseGoogle={responseGoogle} responseFacebook={responseFacebook} responseGoogleFail={responseGoogleFail} /> : 
        <Redirect to="/perfil" />
      }
    </Fragment>
  );
}

export default Login;