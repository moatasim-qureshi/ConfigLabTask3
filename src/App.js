// import React from 'react';
// import Header from './components/Header';
// import TransactionForm from './components/TransactionForm';
// import TransactionHistory from './components/TransactionHistory';
// import FinancialSummary from './components/FinancialSummary';
// import { BudgetProvider } from './context/BudgetContext';

// const App = () => {
//   return (
//     <BudgetProvider>
//       {/* Add background color here with Tailwind and set minimum height */}
//       <div className="bg-[#1E1E2C] min-h-screen p-6">
//         {/* Container that holds all components */}
//         <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
//           {/* Header spans all 3 columns */}
//           <div className="col-span-3">
//             <Header />
//           </div>
//           {/* TransactionForm spans 1 column */}
//           <div className="col-span-1">
//             <TransactionForm />
//           </div>
//           {/* TransactionHistory spans 2 columns */}
//           <div className="col-span-2">
//             <TransactionHistory />
//           </div>
//           {/* FinancialSummary spans all 3 columns */}
//           <div className="col-span-3">
//             <FinancialSummary />
//           </div>
//         </div>
//       </div>
//     </BudgetProvider>
//   );
// };

// export default App;


import React from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';
import FinancialSummary from './components/FinancialSummary';
import { BudgetProvider } from './context/BudgetContext';

const App = () => {
  return (
    <BudgetProvider>
      <div className="bg-[#1E1E2C] min-h-screen p-6">
        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
          {/* Header spans all 3 columns */}
          <div className="col-span-3">
            <Header />
          </div>

          {/* On mobile, TransactionForm and TransactionHistory stack; on desktop they are in separate columns */}
          <div className="col-span-3 md:col-span-1 flex flex-col gap-6">
            <TransactionForm />
            <TransactionHistory />
          </div>

          {/* Financial Summary spans all 3 columns on larger screens */}
          <div className="col-span-3 md:col-span-2">
            <FinancialSummary />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;
