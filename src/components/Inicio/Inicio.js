import React from 'react';
import ImagenBienvenida from '../../assets/NUEVA PORTADA VISION MSD.jpg'
import './Inicio.css'

const Inicio = () => {
  return (
    <div className="contenido">
      <div className="barra-superior-contenido-principal">
        <div className="titulo-contenido">
          Acerca de
        </div>
      </div>
      <div id="bienvenida">
        <img src={ImagenBienvenida} alt="Bienvenida" />
      </div>
    </div>
  );
};

export default Inicio;