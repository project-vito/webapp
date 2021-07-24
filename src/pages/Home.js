import React from 'react';
import HomeCard from '../components/HomeCard';
import Spacer from '../components/Spacer';
import ResultGrid from '../components/ResultsGrid';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-slider">
        <h3 className="slider-copy">Merecen una oportunidad</h3>
      </div>

      <div className="container">
        <div className="row">
          <HomeCard className="col-12 col-md-6" title="Ayuda a un amigo" link="/ayudar-un-amigo" linkText="patrocinar una amigo"></HomeCard>
          <HomeCard className="col-12 col-md-6" title="Donaciones" link="/donaciones"  linkText="ayudar"></HomeCard>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="col-12">Ultimos casos</h1>
          <Spacer height="60" />
          <ResultGrid sortBy="date-asc" count="6"/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;