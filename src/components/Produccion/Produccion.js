import React from 'react';
import { connect } from 'react-redux'
import produccionActions from '../../redux/produccion/actions'
import './Produccion.css'

const Produccion = ({numeroSmolts, fijarNumeroSmolts, pesoSmolts, fijarPesoSmolts}) => {
  return (
    <div className="contenido">
      <div className="barra-superior-contenido">
        <div className="titulo-contenido">
          Parámetros productivos
        </div>
      </div>
      <div className="contenido-contenido">
        <label for="numero-smolts">Número de smolts al ingreso</label>
        <input
          id="numero-smolts"
          name="numero-smolts"
          type="number" min="50000" step="50000"
          value={numeroSmolts}
          onChange={e => fijarNumeroSmolts(e.target.value)}
        />
        <label for="numero-smolts">Peso medio de smolts al ingreso</label>
        <input
          id="peso-smolts"
          name="peso-smolts"
          type="number" min="5" step="5"
          value={pesoSmolts}
          onChange={e => fijarPesoSmolts(e.target.value)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  numeroSmolts: state.produccion.numeroSmolts,
  pesoSmolts: state.produccion.pesoSmolts
})

const mapDispatchToProps = dispatch => ({
  fijarNumeroSmolts: n => {
    dispatch(produccionActions.fijarNumeroSmolts(n))
  },
  fijarPesoSmolts: g => {
    dispatch(produccionActions.fijarPesoSmolts(g))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Produccion);