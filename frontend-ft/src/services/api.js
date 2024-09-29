import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create - Add a new transaction
export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error(
      'Error adding transaction:',
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

// Read - Fetch all transactions
export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching transactions:',
      error.response ? error.response.data : error.message
    );
    return [];
  }
};

// Read - Fetch a single transaction by ID
export const getTransaction = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching transaction with id ${id}:`,
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

// Update - Update a transaction
export const updateTransaction = async (id, transaction) => {
  try {
    const response = await axios.put(
      `${API_URL}/transactions/${id}`,
      transaction
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating transaction with id ${id}:`,
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

// Delete - Delete a transaction
export const deleteTransaction = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting transaction with id ${id}:`,
      error.response ? error.response.data : error.message
    );
    return null;
  }
};
