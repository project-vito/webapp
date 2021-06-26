import React, { useState, useEffect, Fragment, useContext } from 'react';
import LoginButtons from '../components/LoginButtons';
import { Redirect } from 'react-router';
import AppDataProvider from '../providers/AppDataProvider';

const Login = () => {
  const { appInfo, setAppInfo } = useContext(AppDataProvider);
  const [ userInfo, setUserInfo]  = useState(null);

  useEffect(() => {
    setUserInfo(localStorage.getItem('google') || localStorage.getItem('fb') || null);
  });

  const responseGoogle = e => {
    setUserInfo(e.dt);
    setAppInfo({...appInfo, userInfo: e.dt});
    
    localStorage.setItem('google', JSON.stringify(e.dt));
  }

  const responseFacebook = e => {
    if(e.status !== "unknown" && e.status !== "error") {
      delete e.accessToken;
      setUserInfo(e);
      setAppInfo({...appInfo, userInfo: e});

      localStorage.setItem('fb', JSON.stringify(e));
    }
  }

  const responseGoogleFail = e => {
    localStorage.setItem('google', null);
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