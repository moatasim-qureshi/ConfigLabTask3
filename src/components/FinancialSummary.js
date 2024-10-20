import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { BudgetContext } from '../context/BudgetContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FinancialSummary = () => {
  const { incomeData, expenseData } = useContext(BudgetContext);

  const incomeOptions = {
    labels: Object.keys(incomeData),
    datasets: [
      {
        data: Object.values(incomeData),
        backgroundColor: ['#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9'],
      },
    ],
  };

  const expenseOptions = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: ['#FF5252', '#FF8A80', '#FFCDD2', '#F48FB1'],
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mt-6">
      <div className="flex-1 p-4 bg-[#2C2C3C] rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4 text-white text-center">Income</h2>
        <Pie data={incomeOptions} />
      </div>
      <div className="flex-1 p-4 bg-[#2C2C3C] rounded-lg shadow-md mt-6 md:mt-0">
        <h2 className="text-lg font-bold mb-4 text-white text-center">Expense</h2>
        <Pie data={expenseOptions} />
      </div>
    </div>
  );
};

export default FinancialSummary;


