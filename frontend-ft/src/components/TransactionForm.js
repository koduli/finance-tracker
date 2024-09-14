// src/components/TransactionForm.js
import React, { useState, useEffect } from 'react';

function TransactionForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    description: initialData.description || '',
    amount: initialData.amount || '',
    category: initialData.category || '',
  });

  useEffect(() => {
    setForm({
      description: initialData.description || '',
      amount: initialData.amount || '',
      category: initialData.category || '',
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
    setForm({ description: '', amount: '', category: '' });
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
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default TransactionForm;
