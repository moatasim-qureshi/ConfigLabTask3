import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(BudgetContext);

  return (
    <div className="bg-[#282A36] p-6 rounded-lg shadow-md mt-4 max-h-60 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4 text-white">Transaction History</h2>
      <ul className="max-h-52 overflow-y-auto">
        {transactions.length === 0 ? (
          <li className="text-white text-center">No transactions found.</li>
        ) : (
          transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between p-4 mb-2 bg-[#3A3B4D] rounded">
              <div>
                <p className="font-semibold text-white">{transaction.description}</p>
                <p
                  className={`text-sm ${
                    transaction.type === 'Income' ? 'text-[#4CAF50]' : 'text-[#FF5252]'
                  }`}
                >
                  {transaction.category} - ${transaction.amount.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="text-[#FF5252] hover:text-red-700"
              >
                🗑
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionHistory;
