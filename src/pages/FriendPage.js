import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Health from '../components/Health';
import Spacer from '../components/Spacer';
import KindDonation from '../components/KindDonation';
import { parseMoneyValue } from '../helpers'; 

const FriendPage = () => {
  const { id } = useParams(); 
  const hostUrl = process.env.REACT_APP_APIHOST || 'http://localhost:3001/';
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    let response = await fetch(`${hostUrl}pet/${id}`);
    let data = await response.json();

    setApiData(data);
  }

  return (
    <div className="container friend-page">
      <h2>{apiData.name}</h2>
      <div className="row">
        <div className="d-md-none col-12 col-md-6 friend-image" style={{ backgroundImage: `url(${apiData.thumb})`}}>
          <Health className="d-md-none" level={apiData.sickness} />
        </div>

        <div className="description col-12 col-md-12 ">
          <img className="pet-image d-none d-md-inline-block" src={apiData.thumb} alt="" />
          <p> <b>Descripción de mi enfermedad</b> </p>
          <p> <Health className="copy d-none d-md-inline-block" level={apiData.sickness} /> </p>
          <div dangerouslySetInnerHTML={{
            __html: apiData.description
          }}></div>
        </div>

        <Spacer className="col-12" height="20" />

        <div className="col-12 col-md-12 ">
          <p className="sub-title"> <b>Donaciones en especie</b> </p>
          <div className="row">
            {apiData.inKindDonations && apiData.inKindDonations.map(e => <KindDonation petId={id} className="col-6 col-md-4" {...e} />)}
          </div>
        </div> 

        <Spacer className="col-12" height="20" />

        <div className="donation col-12 col-md-12 ">
          <p className="sub-title"> <b>Donaciones</b> </p>
          <p>{apiData.name} necesita de tu ayuda, se ha recolectado:</p>
          
          <p className="given-p"><span className="given">{parseMoneyValue(apiData.sponsorGiven)}</span> de </p>
          <p className="required">{parseMoneyValue(apiData.sponsorRequirement)}</p>
        </div> 
        <div className="donation-cta-wrapper col-12 col-md-12 ">
          <Link className="donation-button" to="/donar">Hacer una donacion</Link>
        </div>

        <Spacer className="col-12" height="20" />
      </div>
    </div>
  );
}

export default FriendPage;