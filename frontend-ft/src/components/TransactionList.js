// src/components/TransactionList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTransaction } from '../services/api';

const categoryIcons = {
  Food: '/assets/food.png',
  Transport: '/assets/transport.png',
  Entertainment: '/assets/entertainment.png',
  Bills: '/assets/bills.png',
  Others: '/assets/others.png',
};

function TransactionList({ transactions }) {
  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      alert('Transaction deleted successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting transaction:', error);
      alert('Failed to delete transaction. Please try again.');
    }
  };

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {sortedTransactions.map((transaction) => (
          <li key={transaction.id} className="transaction-card">
            <div className="transaction-info">
              <img
                src={categoryIcons[transaction.category]}
                alt={transaction.category}
                className="transaction-icon"
              />
              <div className="transaction-details">
                <span className="transaction-category">
                  {transaction.category}
                </span>
                <span className="transaction-description">
                  {transaction.description}
                </span>
                <span className="transaction-amount">
                  ${transaction.amount}
                </span>
                <span className="transaction-date">
                  {new Date(transaction.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="transaction-actions">
              <Link to={`/edit/${transaction.id}`}>
                <button className="transaction-btn">Edit</button>
              </Link>
              <button
                className="transaction-btn delete-btn"
                onClick={() => handleDelete(transaction.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
