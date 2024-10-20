import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(BudgetContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');

  // Categories for income and expenses
  const incomeCategories = ['Salary', 'Rental Income', 'Business', 'Investments'];
  const expenseCategories = ['Food', 'Shopping', 'Entertainment', 'Bills'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) return;

    addTransaction({
      description,
      amount: parseFloat(amount),
      type,
      category,
    });

    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#2C2C3C] p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-white">Add Transaction</h2>

      {/* Description Input */}
      <input
        className="w-full mb-4 p-2 border-none rounded bg-[#3A3B4D] text-white"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      {/* Amount Input */}
      <input
        className="w-full mb-4 p-2 border-none rounded bg-[#3A3B4D] text-white"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      {/* Category Select */}
      <select
        className="w-full mb-4 p-2 border-none rounded bg-[#3A3B4D] text-white"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>Select Category</option>
        {type === 'Income' ? (
          incomeCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))
        ) : (
          expenseCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))
        )}
      </select>

      {/* Type Select */}
      <select
        className="w-full mb-4 p-2 border-none rounded bg-[#3A3B4D] text-white"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      {/* Submit Button */}
      <button className="w-full bg-[#4CAF50] text-white p-2 rounded hover:bg-[#43a047]" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
