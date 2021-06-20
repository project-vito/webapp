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

      {/*<div className="container">
        <h1>Quienes somos</h1>
        <p>Somos  El Arca Gatuna, una fundación de carácter privado y legalmente constituida, con un grupo de colaboradores que nos apasiona devolver amor y cariño a todos los que lo necesitan. Este proyecto de vida arrancó como una iniciativa de nuestra fundadora Catalina Rodríguez desde hace más de 10 años, rescatando peluditos en mal estado y llevándolos a nuestra casa para recuperarlos y luego buscarles hogar.</p>
        <p>Pasado un tiempo empezó a crecer el número de animales especialmente gatos ya que encontrábamos casos muy fuertes y muchos abandonados que no tenían tanta atención y ayuda.</p>
        <p>Con el tiempo nos dimos cuenta de que el trabajo con los peludos no podría lograrse sin la ayuda de otras personas, así que amigos y conocidos empezaron a sumarse a la causa con alimento, medicamentos y adopciones dando una nueva oportunidad a nuestros michis. </p>
      </div>*/}
    </div>
  );
}

export default HomePage;