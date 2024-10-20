import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // for generating unique IDs

// Create Budget Context
export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Load from localStorage (optional, but useful for persistence)
  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save to localStorage (optional)
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Add Transaction
  const addTransaction = (transaction) => {
    const newTransaction = { id: uuidv4(), ...transaction }; // Add a unique ID
    setTransactions([newTransaction, ...transactions]);
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  // Calculate total income and expense
  const calculateTotals = () => {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === 'Income')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = transactions
      .filter((transaction) => transaction.type === 'Expense')
      .reduce((acc, curr) => acc + curr.amount, 0);
    return { totalIncome, totalExpense };
  };

  // Prepare data for the income chart
  const incomeData = transactions
    .filter((transaction) => transaction.type === 'Income')
    .reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {});

  // Prepare data for the expense chart
  const expenseData = transactions
    .filter((transaction) => transaction.type === 'Expense')
    .reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {});

  return (
    <BudgetContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        calculateTotals,
        incomeData,
        expenseData,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
