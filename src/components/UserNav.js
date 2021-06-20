import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const UserNav = props => {
  const [open, setOpen] = useState(false);
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
      <a onClick={onOpenMenu} className="icon d-block d-sm-none" href="javascript:false"></a>
      <div className={`links d-none d-md-block ${open && 'open'}`}>
        <Link onClick={onCloseMenu} to="/login">log in</Link>
        <Link onClick={onCloseMenu} to="/registro">Registro</Link>
      </div>
    </div>
  );
} 

export default UserNav;