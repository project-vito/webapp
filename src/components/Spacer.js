import React from 'react';

const Spacer = props => {
  let {
    className,
    ...otherProps
  } = props;  

  return (
    <div className={`spacer ${className}`} style={{height: `${props.height}px`}}></div>
  )
};

export default Spacer;