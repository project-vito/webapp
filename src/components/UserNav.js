import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import AppDataProvider from '../providers/AppDataProvider';

const UserNav = props => {
  const [open, setOpen] = useState(false);
  const { appInfo, setAppInfo } = useContext(AppDataProvider);
  
  let {
    className,
    ...otherProps
  } = props;    
  let classNames = ['user-nav', className].join(' ');

  useEffect(() => {
    
  })

  const onOpenMenu = e => {
    setOpen(!open);
  }

  const onCloseMenu = e => {
    setOpen(false);
  }

  return (
    <div className={classNames}>
      { appInfo.userInfo === null && <a onClick={onOpenMenu} className="icon d-block d-sm-none" href="javascript:false"></a> }
      { appInfo.userInfo !== null &&  <Link className="d-block d-sm-none" to="/perfil"><img className="user-thumb" src={appInfo.userInfo.photo} alt="" /></Link> } 
      <div className={`links d-none d-md-block ${open && 'open'}`}>
        { appInfo.userInfo === null && <Link onClick={onCloseMenu} to="/login">log in</Link> }
        { appInfo.userInfo !== null &&  <Link className="d-none d-sm-block" to="/perfil">Hola {appInfo.userInfo.name.split(' ')[0]} <img className="user-thumb" src={appInfo.userInfo.photo} alt="" /></Link> } 
      </div>
    </div>
  );
} 

export default UserNav;