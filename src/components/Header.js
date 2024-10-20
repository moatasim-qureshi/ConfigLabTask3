import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Header = () => {
  const { calculateTotals } = useContext(BudgetContext);
  const { totalIncome, totalExpense } = calculateTotals();
  const balance = totalIncome - totalExpense;

  return (
    <div className="bg-[#282A36] p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white">Available Balance</h1>
      <p className={`text-5xl font-semibold mt-4 ${balance >= 0 ? 'text-[#4CAF50]' : 'text-[#FF5252]'}`}>
        ${balance.toFixed(2)}
      </p>
      <div className="flex justify-between items-center mt-6 space-x-4">
        <div className="flex-1 bg-[#4CAF50] p-4 rounded-lg">
          <p className="text-white font-semibold">Income</p>
          <p className="text-2xl text-white">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="flex-1 bg-[#FF5252] p-4 rounded-lg">
          <p className="text-white font-semibold">Expense</p>
          <p className="text-2xl text-white">${totalExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;


