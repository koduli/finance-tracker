// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import TransactionList from '../components/TransactionList';
import { getTransactions } from '../services/api';
import '../styles/main.css'; // Ensure the correct CSS path is imported

function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  return (
    <div className="main-container">
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Home;
