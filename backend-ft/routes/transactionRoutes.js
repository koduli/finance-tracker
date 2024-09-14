// backend-ft/routes/transactionRoutes.js
const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// CREATE: Neue Transaktion hinzufügen
router.post('/transactions', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ: Alle Transaktionen abrufen
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ: Eine Transaktion abrufen
router.get('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE: Transaktion bearbeiten
router.put('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.update(req.body);
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE: Transaktion löschen
router.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
