import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatISO } from "date-fns";

const defaultCategories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

export default function AddExpense({ onAdd }){
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(defaultCategories[0]);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(() => formatISO(new Date(), { representation: "date" }));

  function handleSubmit(e){
    e.preventDefault();
    if(!amount) return alert("Amount daalo");
    const item = {
      id: uuidv4(),
      amount: parseFloat(amount),
      category,
      note,
      date
    };
    onAdd(item);
    setAmount("");
    setNote("");
    setCategory(defaultCategories[0]);
    setDate(formatISO(new Date(), { representation: "date" }));
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-[var(--card)] rounded-2xl shadow-lg backdrop-blur-lg border border-white/20">
  <h2 className="text-lg font-semibold mb-3">Add Expense</h2>

  <div className="grid grid-cols-3 gap-3">
    <input
      type="number"
      placeholder="Amount (₹)"
      value={amount}
      onChange={e => setAmount(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <select
      value={category}
      onChange={e => setCategory(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2"
    >
      {defaultCategories.map(c => <option key={c}>{c}</option>)}
    </select>

    <input
      type="date"
      value={date}
      onChange={e => setDate(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2"
    />
  </div>

  <input
    type="text"
    placeholder="Note (optional)"
    value={note}
    onChange={e => setNote(e.target.value)}
    className="mt-3 w-full border border-gray-300 rounded-lg px-3 py-2"
  />

  <button
    type="submit"
    className="mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
  >
    Add Expense
  </button>
</form>

  );
}
