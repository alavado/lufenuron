import React from 'react';
import logoElanco from '../../../assets/elanco.svg'
import { useSelector } from 'react-redux'
import { obtenerFechaActualBonita } from '../../../helpers/helpers';

const EncabezadoReporte = () => {

  const centro = useSelector(state => state.centro)
  const { nombreCentro, titular } = centro
  const codigoCentro = centro.barrios[centro.indiceBarrioSeleccionado].centros[centro.indiceCentroSeleccionado].codigo

  return (
    <>
      <img src={logoElanco} alt="logo elanco" id="logo-elanco-reporte" />
      <div id="encabezado-reporte">
        <h6>ESTRUCTURA E INSUMOS REPORTE DE SALIDA MODELO DE SIMULACIÓN IMVIXA</h6>
        <h1>REPORTE IMPACTO ELANCO</h1>
        <ul id="datos-empresa-reporte">
          <li>Empesa: <span>{titular}</span></li>
          <li>Centro: <span>{(nombreCentro !== '' ? `${nombreCentro} (código: ${codigoCentro})` : codigoCentro)}</span></li>
          <li>Fecha: <span>{obtenerFechaActualBonita()}</span></li>
        </ul>
      </div>
    </>
  );
};

export default EncabezadoReporte;