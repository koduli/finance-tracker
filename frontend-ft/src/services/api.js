import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Stelle sicher, dass dies der richtige Port deines Backends ist

// Create - Neue Transaktion hinzufügen
export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction', error);
    return null;
  }
};

// Read - Alle Transaktionen abrufen
export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions', error);
    return [];
  }
};

// Read - Eine einzelne Transaktion abrufen
export const getTransaction = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching transaction with id ${id}`, error);
    return null;
  }
};

// Update - Eine Transaktion aktualisieren
export const updateTransaction = async (id, transaction) => {
  try {
    const response = await axios.put(
      `${API_URL}/transactions/${id}`,
      transaction
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating transaction with id ${id}`, error);
    return null;
  }
};

// Delete - Eine Transaktion löschen
export const deleteTransaction = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting transaction with id ${id}`, error);
    return null;
  }
};
