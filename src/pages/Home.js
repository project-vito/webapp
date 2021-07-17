import React from 'react';
import HomeCard from '../components/HomeCard'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-slider">
        <h3 className="slider-copy">Merecen una oportunidad</h3>
      </div>

      <div className="container">
        <div className="row">
          <HomeCard className="col-12 col-md-6" title="Ayuda a un amigo" link="/ayuda-un-amigo" linkText="patrocinar una amigo"></HomeCard>
          <HomeCard className="col-12 col-md-6" title="Donaciones" link="/donaciones"  linkText="ayudar"></HomeCard>
        </div>
      </div>
    </div>
  );
}

export default HomePage;