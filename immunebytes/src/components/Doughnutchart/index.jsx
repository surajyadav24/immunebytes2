import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data) return; // Ensure data is available

    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Low', 'High', 'Medium', 'Critical','Informational'],
        datasets: [
          {
            data: [
              data.Low || 0, 
              data.High || 0, 
              data.Medium || 0, 
              data.Critical || 0,
              data.Informational || 0
            ], // Data passed as props
            backgroundColor: ['#DAA520', '#C70000', '#FF8C00', '#B22222','#228B22'], // Segment colors
            hoverOffset: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom', // Position of legend
            labels: {
              color: '#fff' // Change legend text color
            }
          }
        }
      }
    });

    // Cleanup chart instance on component unmount
    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};


export default DoughnutChart;
