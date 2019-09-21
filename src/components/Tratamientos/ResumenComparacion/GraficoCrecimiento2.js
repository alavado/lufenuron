import React from 'react';
import {Line} from 'react-chartjs-2';

const GraficoCrecimiento2 = ({curvaTradicional, curvaImvixa, pesoObjetivo}) => {

  const curvaMasLarga = curvaTradicional.length > curvaImvixa.length ? curvaTradicional : curvaImvixa

  const data = {
    labels: curvaMasLarga.reduce((arr, v, i) => (i + 1) % 7 === 1 || i === curvaMasLarga.length - 1 ? [...arr, v[0]] : arr, []),
    datasets: [
      {
        label: 'Imvixa',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#EF6C00',
        borderColor: '#EF6C00',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#EF6C00',
        pointBackgroundColor: '#EF6C00',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#EF6C00',
        pointHoverBorderColor: '#EF6C00',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: curvaImvixa.reduce((arr, v, i) => (i + 1) % 7 === 1 || i === curvaImvixa.length - 1 ? [...arr, v[1]] : arr, []),
      },
      {
        label: 'Tradicional',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#546E7A',
        borderColor: '#546E7A',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#546E7A',
        pointBackgroundColor: '#546E7A',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#546E7A',
        pointHoverBorderColor: '#546E7A',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: curvaTradicional.reduce((arr, v, i) => (i + 1) % 7 === 1 || i === curvaTradicional.length - 1 ? [...arr, v[1]] : arr, []),
      }
    ],
  }

  const options = {
    legend: {
      position: 'right',
      display: true,
      labels: {
        boxWidth: 14,
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          stepSize: 30
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          max: pesoObjetivo
        }
      }]
    }
  }
  
  return (
    <div style={{marginTop: 32, width: '640px', height: '350px'}}>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default GraficoCrecimiento2;