import React, { useState } from 'react';
import { connect } from 'react-redux'
import './Tratamientos.css'
import tratamientosActions from '../../redux/tratamientos/actions';
import { dias } from '../../helpers/constantes'
import ResumenComparacion from './ResumenComparacion/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Tratamientos = props => {

  const { tratamientos, medicamentos } = props

  const [nuevoTratamiento, setNuevoTratamiento] = useState({
    idMedicamento: medicamentos.sort((t1, t2) => t1.nombre > t2.nombre ? 1 : -1)[0].id,
    estrategia: 'A',
    semana: 1,
    dia: 'Lunes',
    duracion: 3
  })

  const moverPopup = (e, semana, estrategia) => {
    var rect = document.getElementById('contenedor-calendarios').getBoundingClientRect();
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    var popup = document.getElementById('popup-semana')
    if (tratamientos[estrategia][semana]) {
      popup.innerHTML = `Semana ${semana}<br />${medicamentos.find(t => t.id === tratamientos[estrategia][semana].idMedicamento).nombre}`
    }
    else {
      popup.innerHTML = `Semana ${semana}`
    }
    popup.style.margin = `${y - 18}px 0 0 ${x + 5}px`
    popup.style.display = 'block'
  }

  const esconderPopup = () => {
    var popup = document.getElementById('popup-semana')
    popup.style.display = 'none'
  }

  const mostrarPopupNuevoTratamiento = (e, semana, estrategia) => {
    setNuevoTratamiento({
      ...nuevoTratamiento,
      semana: Number(semana),
      estrategia
    })
    var rect = document.getElementById('contenedor-calendarios').getBoundingClientRect();
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    const popup = document.getElementById('popup-tratamiento')
    popup.style.margin = `${y}px 0 0 ${x}px`
    popup.style.display = 'block'
  }

  const esconderPopupNuevoTratamiento = () => {
    const popupTratamiento = document.getElementById('popup-tratamiento')
    popupTratamiento.style.display = 'none'
  }

  const agregarTratamiento = () => {
    esconderPopupNuevoTratamiento()
    if (nuevoTratamiento.id !== 0) { 
      props.agregarTratamiento(nuevoTratamiento)
    }
    else {
      props.eliminarTratamiento(nuevoTratamiento)
    }
  }

  const construirCalendario = estrategia => {
    let semanas = []
    let diasTratamientoVigente = 0
    let imvixaActivo = false
    for (let semana = 1; semana <= 80; semana++) {
      let classSemana =  'tratamiento-inactivo'
      const tratamientoSemana = tratamientos[estrategia][semana]
      if (tratamientoSemana) {
        if (tratamientoSemana.idMedicamento === medicamentos.find(t => t.nombre.toLowerCase() === 'imvixa').id) {
          classSemana = 'imvixa tratamiento-aplicado'
          imvixaActivo = true
        }
        else {
          classSemana = 'tratamiento-aplicado'
          imvixaActivo = false
        }
        diasTratamientoVigente = tratamientoSemana.duracion - 1
      }
      else if (diasTratamientoVigente-- > 0) {
        classSemana = imvixaActivo ? 'imvixa tratamiento-activo' : 'tratamiento-activo'
      }
      semanas.push(<div
        onClick={e => mostrarPopupNuevoTratamiento(e, semana, estrategia)}
        onMouseMove={e => moverPopup(e, semana, estrategia)}
        onMouseLeave={esconderPopup}
        className={classSemana}
      >
        <span>{semana}</span>
      </div>)
    }
    return semanas
  }

  return (
    <>
      <div className="contenido">
        <div className="barra-superior-contenido">
          <div className="titulo-contenido">
            Calendarios de tratamientos
          </div>
        </div>
        <div className="contenido-contenido">
          <div id="contenedor-calendarios">
            {Object.keys(tratamientos).map(estrategia => (
              <div className="contenedor-tratamientos-estrategia">
                <h2>Semanas estrategia {estrategia}</h2>
                <div id={`semanas-estrategia-${estrategia}`}>
                  {construirCalendario(estrategia)}
                </div>
              </div>
            ))}
            <div id="popup-semana">Semana 1</div>
            <div id="popup-tratamiento">
              <button
                id="boton-cerrar-popup-tratamiento"
                onClick={esconderPopupNuevoTratamiento}
              >
                <FontAwesomeIcon icon={faTimes} size="sm" />
              </button>
              <div>
                <label
                  htmlFor="nombre-nuevo-tratamiento"
                  id="titulo-popup-tratamiento"
                >
                  Tratamiento
                </label>
                <select
                  id="nombre-nuevo-tratamiento"
                  defaultValue={medicamentos.sort((t1, t2) => t1.nombre > t2.nombre ? 1 : -1)[0].id}
                  onChange={e => setNuevoTratamiento({...nuevoTratamiento, idMedicamento: Number(e.target.value)})}
                >
                  {/* <option value={0}>Ninguno</option> */}
                  {medicamentos
                    .sort((t1, t2) => t1.nombre > t2.nombre ? 1 : -1)
                    .map(t => <option value={t.id}>{t.nombre}</option>)
                  }
                </select>
              </div>
              <div style={{display: 'flex'}}>
                <div>
                  <label htmlFor="dia-nuevo-tratamiento">Día aplicación</label>
                  <select
                    id="dia-nuevo-tratamiento"
                    onChange={e => setNuevoTratamiento({...nuevoTratamiento, dia: e.target.value})}
                  >
                    {dias.map(dia => <option value={dia}>{dia}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="dia-nuevo-tratamiento">Duración</label>
                  <input
                    type="number"
                    min={1}
                    onChange={e => setNuevoTratamiento({...nuevoTratamiento, duracion: Number(e.target.value)})}
                    defaultValue={3} />
                  <span>sem.</span>
                </div>
              </div>
              <button id="boton-agregar-tratamiento" onClick={agregarTratamiento}>Aplicar</button>
            </div>
          </div>
        </div>
      </div>
      <ResumenComparacion />
    </>
  );
};

const mapStateToProps = state => ({
  tratamientos: state.tratamientos.tratamientos,
  medicamentos: state.tratamientos.medicamentos
})

const mapDispatchToProps = dispatch => ({
  agregarTratamiento: tratamiento => {
    const { idMedicamento, semana, estrategia, dia, duracion } = tratamiento
    dispatch(tratamientosActions.agregarTratamiento(idMedicamento, semana, dia, estrategia, duracion))
  },
  eliminarTratamiento: tratamiento => {
    const { semana, estrategia } = tratamiento
    dispatch(tratamientosActions.eliminarTratamiento(semana, estrategia))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tratamientos);