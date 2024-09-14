// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import TransactionList from '../components/TransactionList';
import { getTransactions } from '../services/api';

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
    <div>
      <h1>Budget Tracker</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Home;
