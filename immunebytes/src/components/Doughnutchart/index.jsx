import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data) return; // Ensure data is available

    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Fixed', 'Redacted', 'Open', 'Acknowledged'],
        datasets: [
          {
            data: [
              data.Fixed || 0, 
              data.Redacted || 0, 
              data.Open || 0, 
              data.Acknowledged || 0
            ], // Data passed as props
            backgroundColor: ['#008A1E', '#800080', '#980000', '#FF5A45'], // Segment colors
            hoverOffset: 4
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
