import React, { useEffect, useState, useContext } from 'react';
import {
  Link
} from "react-router-dom";
import LogoLG from '../css/assets/icons/cat-md.svg'
import LogoSM from '../css/assets/icons/cat-sm.svg'
import UserNav from './UserNav';
import Provider from '../providers/AppDataProvider';

const Header = () => {
  const [open, setOpen] = useState(false);
  const  { appInfo, setAppInfo } = useContext(Provider);

  useEffect(() => {
    
  })

  const onOpenMenu = e => {
    setOpen(true);
  }

  const onCloseMenu = e => {
    setOpen(false);
  }


  return (
    <header className="">
      <div className="container">
        <a className="hambuger-menu-button d-sm-none" onClick={onOpenMenu} href="javascript:false"></a>
        <nav className={`nav-wrapper ${open ? "open" : "" }`}>
          <span className="nav-overlay d-sm-none"></span>
          <ul className={`main-menu-list ${open ? "open" : "" }`} >
            <li className="main-menu-item">
              <img className="logo logo-md d-none d-sm-block" src={LogoLG} alt=""/>
              <img className="logo logo-sm d-sm-none" src={LogoSM} alt=""/>

              <a className="close-menu-button d-sm-none" onClick={onCloseMenu} href="javascript:false"></a>
            </li>
            <li className="main-menu-item">
              <Link to="/" onClick={onCloseMenu}>Home</Link>
            </li>
            <li className="main-menu-item">
              <Link to="/ayudar-un-amigo" onClick={onCloseMenu}>Ayudar un amigo</Link>
            </li>
            <li className="main-menu-item">
              <Link to="/ayudar" onClick={onCloseMenu}>Pet home</Link>
            </li>

            <li className="main-menu-item d-none user-nav-desktop">
              <UserNav />
            </li>

            <li className="main-menu-item d-sm-none" >
              Copyright here
            </li>
          </ul>
        </nav>
        <UserNav className="user-nav-item mobile d-block d-sm-none" />
      </div>
    </header>
    
  )
}

export default Header;