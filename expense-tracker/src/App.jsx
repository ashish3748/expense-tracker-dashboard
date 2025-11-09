/*import React, { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ChartSummary from "./components/ChartSummary";
import ThemeToggle from "./components/ThemeToggle";
import { loadExpenses, saveExpenses } from "./utils/storage";

export default function App(){
  const [expenses, setExpenses] = useState(() => loadExpenses());

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  function handleAdd(item){
    setExpenses(prev => [item, ...prev]);
  }

  function handleDelete(id){
    if(!window.confirm("Remove this expense?")) return;
    setExpenses(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1 style={{margin:0}}>Expense Tracker</h1>
          <div className="small">LocalStorage backed • add, list & visualize</div>
        </div>
        <ThemeToggle />
      </div>

      <div className="grid">
        <div>
          <AddExpense onAdd={handleAdd} />
          <div style={{height:16}}></div>
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </div>

        <div>
          <ChartSummary expenses={expenses} />
        </div>
      </div>
    </div>
  );
}*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

