import React from "react";

export default function ExpenseList({ expenses, onDelete }){
  if(!expenses.length) return <div className="card small">Koi expense nahi hai. Pehle add karo.</div>;

  return (
    <div className="p-5 bg-[var(--card)] rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 mt-5">
  <h2 className="text-lg font-semibold mb-3">All Expenses</h2>
  <div className="flex flex-col gap-3">
    {expenses.map(e => (
      <div
        key={e.id}
        className="flex justify-between items-center p-3 rounded-lg border border-gray-200/20 hover:bg-gray-100/5 transition"
      >
        <div>
          <div className="font-semibold">{e.category}</div>
          <div className="text-sm text-gray-400">{e.note || "—"}</div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-indigo-500">₹{e.amount}</div>
          <div className="text-xs text-gray-400">{e.date}</div>
          <button
            onClick={() => onDelete(e.id)}
            className="mt-2 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
