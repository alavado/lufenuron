import React from 'react';
import { connect } from 'react-redux'
import produccionActions from '../../redux/produccion/actions'
import { curvaMortalidad } from '../../helpers/modelo'
import { Doughnut } from 'react-chartjs-2'
import './Produccion.css'
import { PESO_OBJETIVO_MAXIMO, PESO_OBJETIVO_MINIMO, OBJETIVO_PESO, OBJETIVO_FECHA } from '../../helpers/constantes';

const Produccion = props => {
  const { datos } = props
  const curva = curvaMortalidad(props.modeloMortalidad)
  return (
    <>
      <div className="contenido">
        <div className="barra-superior-contenido">
          <div className="titulo-contenido">
            Parámetros productivos
          </div>
        </div>
        <div className="contenido-contenido">
          <label htmlFor="fecha-inicio">Inicio ciclo</label>
          <input
            id="fecha-inicio"
            name="fecha-inicio"
            type="date"
            defaultValue={datos.fechaInicio}
            onChange={e => props.fijarFechaInicio(e.target.value)}
            style={{width: 130}}
          />
          <label htmlFor="numero-smolts">N° smolts al ingreso</label>
          <input
            id="numero-smolts"
            name="numero-smolts"
            type="number" min="50000" step="50000"
            defaultValue={datos.numeroSmolts}
            onChange={e => props.fijarNumeroSmolts(e.target.value)}
            style={{width: 80}}
          />
          <label htmlFor="mortalidad">Mortalidad ciclo</label>
          <input
            id="mortalidad"
            name="mortalidad"
            type="number" min="0" step=".5" max="100"
            defaultValue={datos.mortalidad}
            onChange={e => props.fijarMortalidad(e.target.value)}
            style={{width: 45}}
          /> %
          <h1 style={{marginBottom: 12, paddingTop: 12, borderTop: '1px dotted lightgray'}}>Pesos medios de ingreso</h1>
          <div style={{display: 'flex'}}>
            <div>
              <label htmlFor="peso-smolt-imvixa">Estrategia Imvixa</label>
              <input
                id="peso-smolt-imvixa"
                name="peso-smolt-imvixa"
                type="number" min="5" step="5"
                defaultValue={datos.pesosSmolt.imvixa}
                onChange={e => props.fijarPesoSmoltEstrategiaImvixa(e.target.value)}
                style={{width: 46}}
              /> g
            </div>
            <div style={{marginLeft: 32}}>
              <label htmlFor="peso-smolt-tradicional">Estrategia tradicional</label>
              <input
                id="peso-smolt-tradicional"
                name="peso-smolt-tradicional"
                type="number" min="5" step="5"
                defaultValue={datos.pesosSmolt.tradicional}
                onChange={e => props.fijarPesoSmoltEstrategiaTradicional(e.target.value)}
                style={{width: 46}}
              /> g
            </div>
          </div>
          <h1 style={{marginBottom: 12, paddingTop: 12, borderTop: '1px dotted lightgray'}}>Objetivo</h1>
          <div style={{display: 'flex', alignItems: 'baseline'}}>
            <input
              type="radio"
              name="objetivo"
              className="radio-button"
              defaultChecked={datos.objetivo === OBJETIVO_PESO} onClick={() => props.fijarObjetivo(OBJETIVO_PESO)}
            />
            <label style={{ fontSize: '1em', marginRight: 8 }} htmlFor="peso-objetivo">Peso:</label>
            <input
              id="peso-objetivo"
              name="peso-objetivo"
              type="number" min="500" step="50"
              defaultValue={datos.pesoObjetivo}
              onChange={e => props.fijarPesoObjetivo(e.target.value)}
              style={{width: 50, marginRight: 4}}
              onClick={() => props.fijarObjetivo(OBJETIVO_PESO)}
            /> g
          </div>
          <div style={{display: 'flex', alignItems: 'baseline'}}>
            <input
              type="radio"
              name="objetivo"
              className="radio-button"
              defaultChecked={datos.objetivo !== OBJETIVO_PESO} onClick={() => props.fijarObjetivo(OBJETIVO_FECHA)}
            />
            <label style={{ fontSize: '1em', marginRight: 8 }} htmlFor="fecha-objetivo">Fin de ciclo:</label>
            <input
              id="fecha-objetivo"
              name="fecha-objetivo"
              type="date"
              defaultValue={datos.fechaObjetivo}
              onChange={e => props.fijarFechaObjetivo(e.target.value)}
              style={{width: 130}}
              onClick={() => props.fijarObjetivo(OBJETIVO_FECHA)}
            />
          </div>
        </div>
      </div>
      <div className="contenido-secundario">
        <div className="titulo-contenido-secundario">
          <h1>Proyección</h1>
        </div>
        <div className="contenido-secundario-contenido">
          <div style={{marginTop: 32, width: '640px', height: '350px'}}>
            {/* <h1>Mortalidad ciclo</h1>
            <Line
              data={{
                labels: ['x', 'y'],
                datasets: [
                  {
                    data: [1, 2],
                    backgroundColor: 'red'
                  }
                ]
              }}
            /> */}
            <h1>Biomasa</h1>
            <Doughnut
              data={{
                labels: ['Biomasa producida', 'Biomasa perdida'],
                datasets: [
                  {
                    data: [
                      datos.numeroSmolts - datos.numeroSmolts * datos.mortalidad / 100.0,
                      datos.numeroSmolts * datos.mortalidad / 100.0,
                    ],
                    backgroundColor: ['#4CAF50', '#F44336']
                  }
                ]
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  datos: state.produccion,
  modeloMortalidad: state.centro.barrios[state.centro.indiceBarrioSeleccionado].modeloMortalidad
})

const mapDispatchToProps = dispatch => ({
  fijarFechaInicio: fecha => {
    dispatch(produccionActions.fijarFechaInicio(fecha))
  },
  fijarNumeroSmolts: n => {
    dispatch(produccionActions.fijarNumeroSmolts(Number(n)))
  },
  fijarPesoSmoltEstrategiaImvixa: peso => {
    dispatch(produccionActions.fijarPesoSmolt('imvixa', Number(peso)))
  },
  fijarPesoSmoltEstrategiaTradicional: peso => {
    dispatch(produccionActions.fijarPesoSmolt('tradicional', Number(peso)))
  },
  fijarCostoSmolt: usd => {
    dispatch(produccionActions.fijarCostoSmolt(Number(usd)))
  },
  fijarMortalidad: tasa => {
    dispatch(produccionActions.fijarMortalidad(Math.max(0, Math.min(Number(tasa), 100))))
  },
  fijarPesoObjetivo: g => {
    dispatch(produccionActions.fijarPesoObjetivo(Math.min(PESO_OBJETIVO_MAXIMO, Math.max(Number(g), PESO_OBJETIVO_MINIMO))))
  },
  fijarAjusteCrecimiento: tasa => {
    dispatch(produccionActions.fijarAjusteCrecimiento(Number(tasa)))
  },
  fijarBFCR: valor => {
    dispatch(produccionActions.fijarBFCR(Number(valor)))
  },
  fijarCostoAlimento: usd => {
    dispatch(produccionActions.fijarCostoAlimento(Number(usd)))
  },
  fijarObjetivo: objetivo => {
    dispatch(produccionActions.fijarObjetivo(objetivo))
  },
  fijarFechaObjetivo: fecha => {
    dispatch(produccionActions.fijarFechaObjetivo(fecha))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Produccion);