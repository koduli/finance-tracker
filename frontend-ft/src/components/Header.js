// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'; // Ensure the correct CSS path is imported

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-transaction">Add Transaction</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </nav>
        <h1 className="header-title">Finance Tracker</h1>
      </div>
    </header>
  );
}

export default Header;
