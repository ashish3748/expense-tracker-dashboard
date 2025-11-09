import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [data, setData] = useState({ amount: '', category: 'food', note: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!data.amount) return toast.error('Enter amount');
    addExpense({ id: uuidv4(), ...data, date: new Date().toISOString().slice(0, 10) });
    toast.success('Expense added');
    setData({ amount: '', category: 'food', note: '' });
  };

  return (
    <form onSubmit={submit} className="p-4 bg-white rounded shadow">
      <div className="grid grid-cols-3 gap-3">
        <input
          placeholder="Amount"
          value={data.amount}
          onChange={(e) => setData({ ...data, amount: e.target.value })}
          className="border p-2 rounded"
        />
        <select
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option>food</option>
          <option>shopping</option>
          <option>transport</option>
          <option>bills</option>
          <option>other</option>
        </select>
        <input
          placeholder="Note"
          value={data.note}
          onChange={(e) => setData({ ...data, note: e.target.value })}
          className="border p-2 rounded"
        />
      </div>
      <button className="mt-3 bg-sky-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default ExpenseForm;
