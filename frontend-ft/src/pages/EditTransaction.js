// src/pages/EditTransaction.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransactionForm from '../components/TransactionForm';
import { getTransaction, updateTransaction } from '../services/api';

function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    const data = await getTransaction(id);
    setTransaction(data);
  };

  const handleUpdate = async (updatedTransaction) => {
    await updateTransaction(id, updatedTransaction);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Transaction</h2>
      {transaction ? (
        <TransactionForm initialData={transaction} onSubmit={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditTransaction;
