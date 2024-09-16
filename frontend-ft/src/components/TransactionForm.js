// src/components/TransactionForm.js
import React, { useState, useEffect } from 'react';

function TransactionForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    description: initialData.description || '',
    amount: initialData.amount || '',
    category: initialData.category || '',
    date: initialData.date || '',
  });

  useEffect(() => {
    setForm({
      description: initialData.description || '',
      amount: initialData.amount || '',
      category: initialData.category || '',
      date: initialData.date || '',
    });
  }, [initialData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ description: '', amount: '', category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default TransactionForm;
