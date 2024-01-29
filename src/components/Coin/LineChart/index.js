import React, { useRef, useEffect } from 'react';
import { Chart, LineElement, LineController, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useScreenSize } from '../../../functions/useScreenSize';

const LineChartComp = ({ prices, coinInfo }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line
  const screenSize = useScreenSize(); 

  useEffect(() => {
    if (chartInstance.current) { // Check if chart instance exists
      chartInstance.current.destroy(); // Destroy the old chart
    }
    Chart.register(LineElement, LineController, PointElement, CategoryScale, LinearScale);
    const myChartRef = chartRef.current.getContext("2d");

    const labels = prices.map((price) => { 
      const date = new Date(price[0]); 
      return `${date.getDate()}/${date.getMonth()+1}`; 
    });

    const time = prices.map((price) => { 
      const dateTime = new Date(price[0])
      return `${dateTime.getHours() === 0? (dateTime.getHours()+"0"):(dateTime.getHours())}:${dateTime.getMinutes()}`; 
    });
    const combinedLabels =screenSize.width <= 480 ? labels : labels.map((label, index) => `${label} ${time[index]}`);
    let uniqueLabels = [];
    labels.forEach((label, index) => {
      uniqueLabels.push(`${label} ${time[index]}`); 
    });

    


    const data = prices.map((price) => price[1]);

   chartInstance.current = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: combinedLabels,
        datasets: [{
          label: coinInfo,
          data: data,
          borderWidth: 2,
          fill: true,
          tension: 0.5,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0.75,
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
        }
      }
    });
  }, [prices, screenSize.width]);

  return (
      <canvas ref={chartRef} />
  );
};

export default LineChartComp;
