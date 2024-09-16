// src/pages/Statistics.js
import React, { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';
import { Chart } from 'chart.js/auto';
import '../styles/main.css'; // CSS importieren

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
    const categories = [...new Set(data.map((item) => item.category))];
    const amounts = categories.map((cat) =>
      data
        .filter((item) => item.category === cat)
        .reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
    );

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
              '#FF9F40',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
