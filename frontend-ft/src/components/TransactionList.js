// src/components/TransactionList.js
import React from 'react';
import { Link } from 'react-router-dom';

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
            <Link to={`/edit/${transaction.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
