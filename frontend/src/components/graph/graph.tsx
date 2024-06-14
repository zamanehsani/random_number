// ChartComponent.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartData,
  ChartOptions
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const Graph: React.FC = () => {

  const data: ChartData<'line'> = {
    labels: [0,1,2,3,4,5,6,7,8,9,10],
    datasets: [
      {
        data: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1, 1.3, 1.5, 2, 2.5, 3, 4, 4, 5, 6, 7, 8, 9,10],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 100, // Animation duration in milliseconds
      easing: 'easeInOutBounce', // Easing function
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-full p-2">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
