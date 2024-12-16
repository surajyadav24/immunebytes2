import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const DoughnutChart = ({ data }) => {
const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Final', 'Resolved', 'Open', 'Acknowledged'],
        datasets: [
          {
            data: [data.final, data.resolved, data.open, data.acknowledged], // Data passed as props
            backgroundColor: ['#F9116C', '#ffc107', '#17a2b8', '#28a745'],   // Segment colors
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
              color: '#fff'      // Change legend text color
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
