import React from 'react';
import whatsappUrl from 'whatsapp-url';


const KindDonation = props => {
  let {
    className,
    ...otherProps
  } = props;  

  const link = {
    phone: process.env.REACT_APP_PHONE,
    text: `Hola, quiero realizar una donacion de este producto ${props.thumb} para este amigo ${process.env.REACT_APP_HOST}ayudar/${props.petId} `
  };

  return (
    <div className={`kind-donation ${className}`} >
        
        <img src={props.thumb} alt="" />
        <p>{props.name}</p>
        <a href={whatsappUrl(link)} target="_blank">Donar</a>
      
    </div>
  )
};

export default KindDonation;