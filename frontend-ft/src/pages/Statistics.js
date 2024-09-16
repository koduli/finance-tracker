import React, { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';
import { Chart, registerables } from 'chart.js';
import '../styles/main.css';

Chart.register(...registerables);

function Statistics() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
    generateChart(data);
  };

  const generateChart = (data) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const categories = [
      'Transport',
      'Food',
      'Bills',
      'Entertainment',
      'Others',
    ];
    const amounts = categories.map((cat) =>
      data
        .filter((item) => item.category === cat)
        .reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
    );

    // Destroy existing chart instances to avoid overlap
    if (Chart.getChart('myChart')) {
      Chart.getChart('myChart').destroy();
    }

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Expenses by Category',
            data: amounts,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                return value > 0
                  ? `${tooltipItem.label}: ${value.toFixed(1)}%`
                  : '';
              },
            },
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'start',
            formatter: (value, context) => {
              const total = context.dataset.data.reduce(
                (acc, curr) => acc + curr,
                0
              );
              const percentage = (value / total) * 100;
              return percentage > 0 ? `${percentage.toFixed(1)}%` : '';
            },
          },
        },
      },
    });
  };

  return (
    <div className="main-container">
      <h2>Statistics</h2>
      <div className="chart-container">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default Statistics;
