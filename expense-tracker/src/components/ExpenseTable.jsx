import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import toast from 'react-hot-toast';

const ExpenseTable = ({ expenses }) => {
  const { removeExpense } = useContext(ExpenseContext);

  const del = (id) => {
    if (confirm('Delete expense?')) {
      removeExpense(id);
      toast.success('Deleted');
    }
  };

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-left">
            <th className="p-3">Date</th>
            <th className="p-3">Category</th>
            <th className="p-3">Note</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
  {expenses.map((e) => (
    <tr
      key={e.id}
      className="border-t hover:bg-gray-100/50 dark:hover:bg-gray-800/40 transition"
    >
      <td className="py-2 px-3">{e.date}</td>
      <td className="py-2 px-3">{e.category}</td>
      <td className="py-2 px-3 font-semibold text-sky-600 dark:text-sky-400">
        ₹{e.amount}
      </td>
      <td className="py-2 px-3">{e.note}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default ExpenseTable;
