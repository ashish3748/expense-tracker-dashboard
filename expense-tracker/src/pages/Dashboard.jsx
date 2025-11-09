import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="flex justify-between w-full max-w-md mb-4">
        <h1 className="text-2xl font-bold text-indigo-600">Expense Tracker</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-500">Income</p>
            <p className="text-green-600 font-semibold">₹{income}</p>
          </div>
          <div>
            <p className="text-gray-500">Expense</p>
            <p className="text-red-600 font-semibold">₹{expense}</p>
          </div>
        </div>

        <form onSubmit={addTransaction} className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Enter description"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border p-2 rounded-md outline-indigo-500"
          />
          <input
            type="number"
            placeholder="Enter amount (+income, -expense)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded-md outline-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
          >
            Add Transaction
          </button>
        </form>

        <ul className="divide-y divide-gray-200">
          {transactions.length === 0 && (
            <p className="text-center text-gray-500">No transactions yet</p>
          )}
          {transactions.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between p-2 ${
                t.amount > 0
                  ? "border-l-4 border-green-500"
                  : "border-l-4 border-red-500"
              }`}
            >
              <span>{t.text}</span>
              <span
                className={`${
                  t.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{t.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;


