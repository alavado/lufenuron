import React from 'react';
import {Line} from 'react-chartjs-2';
import { OBJETIVO_PESO } from '../../../helpers/constantes';

const GraficoCrecimiento = ({curvaTradicional, curvaImvixa, pesoObjetivo, objetivo}) => {

  const curvaMasLarga = curvaTradicional.length > curvaImvixa.length ? curvaTradicional : curvaImvixa

  const data = {
    labels: curvaMasLarga.map((v, dia) => dia),//curvaMasLarga.reduce((arr, v, i) => (i + 1) % 7 === 1 || i === curvaMasLarga.length - 1 ? [...arr, v[0]] : arr, []),
    datasets: [
      {
        label: 'Estrategia 1',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#999999',
        borderColor: '#999999',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#999999',
        pointBackgroundColor: '#999999',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#999999',
        pointHoverBorderColor: '#999999',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: curvaTradicional
      },
      {
        label: 'Estrategia 2',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#6eceb2',
        borderColor: '#6eceb2',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#6eceb2',
        pointBackgroundColor: '#6eceb2',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#6eceb2',
        pointHoverBorderColor: '#6eceb2',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: curvaImvixa
      }
    ],
  }

  const options = {
    legend: {
      display: true,
      labels: {
        boxWidth: 14,
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          if (label) {
              label += ': ';
          }
          label += (tooltipItem.yLabel / 1000).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})
          label += ' kg'
          return label;
        },
        title: () => 'Peso promedio (kg)'
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          callback: function(v, i, vs) { return i % 30 === 0 ? i / 30 : undefined },
          maxRotation: 0,
          autoSkip: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Mes del ciclo'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          max: objetivo === OBJETIVO_PESO ? pesoObjetivo: curvaMasLarga.slice(-1)[0],
          callback: function(v, i, vs) { return `${(Math.round((v / 100)) / 10.0).toLocaleString(undefined, { minimumFractionDigits: 1})}` }
        },
        scaleLabel: {
          display: true,
          labelString: 'Peso promedio (kg)'
        }
      }]
    }
  }
  
  return (
    <div style={{marginTop: 12, width: 640, height: 360}}>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default GraficoCrecimiento;