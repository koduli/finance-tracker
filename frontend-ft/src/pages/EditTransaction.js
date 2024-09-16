// src/pages/EditTransaction.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTransaction, updateTransaction } from '../services/api';
import '../styles/main.css';

function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const data = await getTransaction(id);
        console.log('Fetched transaction:', data); // Debugging line
        if (data) {
          // Format the date to "yyyy-MM-dd"
          const formattedDate = data.date
            ? new Date(data.date).toISOString().split('T')[0]
            : '';
          setForm({
            description: data.description || '',
            amount: data.amount || '',
            category: data.category || '',
            date: formattedDate,
          });
        } else {
          alert('Transaction not found.');
        }
      } catch (error) {
        alert('Failed to fetch transaction.');
        console.error('Error fetching transaction:', error);
      }
    };

    fetchTransaction();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await updateTransaction(id, form);
      if (result) {
        alert('Transaction updated successfully!');
        navigate('/');
      } else {
        alert('Failed to update transaction. Please try again.');
      }
    } catch (error) {
      alert('Error updating transaction.');
      console.error('Error updating transaction:', error);
    }
  };

  return (
    <div className="main-container">
      <h2>Edit Transaction</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditTransaction;
