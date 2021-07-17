import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import Health from './Health';

const GridItem = props => {  
  return (
    <li className="col-6 col-sm-6 col-md-4 grid-item">
      <Link to={`/pet-page/${props.id}`}>
        <div className="image-wrapper" style={{backgroundImage: `url(${props.thumb})`}}>
          <Health level={props.sickness} />
        </div>
        <p><b>{props.name}</b></p>
      </Link>
    </li>
  )
};

export default GridItem;