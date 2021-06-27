import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import AppDataProvider from '../providers/AppDataProvider';

const Profile = () => {
  const { appInfo, setAppInfo } = useContext(AppDataProvider);
  
  const closeSession = e => {
    localStorage.removeItem('session');
    setAppInfo({...appInfo, userInfo: null});
  }

  if(appInfo.userInfo === null) return (<Redirect to="/login" />)
  else {
    return (
      <div className="container profile">
        <h2>Hola {appInfo.userInfo.name}</h2>

        <img className="user-photo" src={appInfo.userInfo.photo} alt="" />
        <p><b>Email:</b> {appInfo.userInfo.email}</p>

        <div className="logout-wrapper">
          <p>No eres {appInfo.userInfo.name}?</p>
          <a className="button center" onClick={closeSession} href="javascript:;"> Cerrar sesion</a>
        </div>
        
      </div>
    );
  }
}

export default Profile;