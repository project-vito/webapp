import React, { useEffect, useState, useContext } from 'react';
import { calculateHealth } from '../helpers';

const Health = props => {
  const MAX_FACES = 5;  
  var healthLevel = calculateHealth(props.level, MAX_FACES); 

  return (
    <div className="health">
      { healthLevel.map(e => <span className="sickness">  </span>) }
    </div>
  )
};

export default Health;