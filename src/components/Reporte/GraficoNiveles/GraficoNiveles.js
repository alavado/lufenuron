import React from 'react'
import './GraficoNiveles.css'

const GraficoNiveles = ({mortalidades}) => {

  const nivelesBioseguridad = [
    {
      nombre: 'Baja 2',
      porcentaje: 25,
      penalizacion: 60
    },
    {
      nombre: 'Baja 1',
      porcentaje: 20,
      penalizacion: 40
    },
    {
      nombre: 'Media',
      porcentaje: 14,
      penalizacion: 20
    },
    {
      nombre: 'Media alta',
      porcentaje: 10,
      penalizacion: 10
    },
    {
      nombre: 'Alta',
      porcentaje: 0,
      penalizacion: 0
    },
  ]
  
  const altoGrafico = 400

  return (
    <div id="grafico-regulacion" style={{height: altoGrafico}}>
      <div id="termometro-bioseguridad">
        <div id="porcentajes-niveles-bioseguridad">
          {nivelesBioseguridad.map(nivel => {
            const marginTop = altoGrafico * (30 - nivel.porcentaje) / 30
            return (
              <>
                <div className="texto-nivel" style={{marginTop: marginTop - 38}}>{nivel.nombre}<br/>{nivel.penalizacion}% Reducción de siembra</div>
                <div className="porcentaje-nivel" style={{marginTop}}>{nivel.porcentaje}%</div>
              </> 
            )})}
        </div>
        <div id="regulacion-imvixa" style={{marginTop: altoGrafico * (30 - mortalidades.imvixa) / 30}}>
          <p>Mortalidad estrategia Imvixa</p>
        </div>
        <div id="regulacion-tradicional" style={{marginTop: altoGrafico * (30 - mortalidades.tradicional) / 30}}>
          <p>Mortalidad estrategia tradicional</p>
        </div>
      </div>
    </div>
  )
}

export default GraficoNiveles