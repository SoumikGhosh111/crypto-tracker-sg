import React, { useRef, useEffect } from 'react';
import { Chart, LineElement, LineController, PointElement, CategoryScale, LinearScale } from 'chart.js'; 
import { Line } from 'react-chartjs-2';
import { useScreenSize } from '../../../functions/useScreenSize';
import { convertNumbers } from '../../../functions/convertNumbers';
import Loader from '../../Common/Loader';
const MultiAxisLineChart = ({ coinData1, coinData2, coin1Info, coin2Info }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    Chart.register(LineElement, LineController, PointElement, CategoryScale, LinearScale);
    const myChartRef = chartRef.current.getContext("2d");


    const labels = coinData1.map((coindata) => {
      const date = new Date(coindata[0]);
      return `${date.getDate()}/${date.getMonth() + 1} `;
    });

    const time = coinData1.map((coindata) => {
      const dateTime = new Date(coindata[0]);
      return `${dateTime.getHours() === 0 ? (dateTime.getHours() + "0") : (dateTime.getHours())}:${dateTime.getMinutes()}`;
    });

    const combinedLabels = screenSize.width <= 480 ? labels : labels.map((item, index) => `${item} ${time[index]}`);

    const data1 = coinData1.map((coin) => coin[1]);

    const data2 = coinData2.map((coin) => coin[1]);



    chartInstance.current = new Chart(myChartRef, {
      type: 'line',

      data: {
        labels: combinedLabels,
        datasets: [{
          label: coin1Info,
          data: data1,
          borderWidth: 2,
          fill: true,
          tension: 0.5,
          //  backgroundColor: "rgba(58, 128, 233, 0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0.75,
          yAxisID: 'y',
        }, {
          label: coin2Info,
          data: data2,
          borderWidth: 2,
          fill: true,
          tension: 0.5,
          //  backgroundColor: "rgba(255, 99, 132, 0.1)",
          borderColor: "#ff6347",
          pointRadius: 0.75,
          yAxisID: 'y1',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Line Chart Example'
          },
          tooltip: {
            enabled: true,
          },
          interaction: {
            mode: 'nearest',
            intersect: true
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
          },
        }
      }
    });
  }, [coinData1, coinData2, screenSize.width]);
  if(!coinData1 && !coinData2){ 
    return <Loader /> 
  }


  return (
    <canvas ref={chartRef} />
  );
};

export default MultiAxisLineChart;




// const labels = prices.map((price) => {
//     const date = new Date(price[0]);
//     return `${date.getDate()}/${date.getMonth()+1}`;
//   });

//   const time = prices.map((price) => {
//     const dateTime = new Date(price[0])
//     return `${dateTime.getHours() === 0? (dateTime.getHours()+"0"):(dateTime.getHours())}:${dateTime.getMinutes()}`;
//   });
//   const combinedLabels = labels.map((label, index) => `${label} ${time[index]}`);
