import React, { createContext, useEffect, useState } from 'react';

export const ExpenseContext = createContext();

const LS_KEY = 'expense_tracker_v1';

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  const [user, setUser] = useState(() => localStorage.getItem('user_email') || null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => localStorage.setItem(LS_KEY, JSON.stringify(expenses)), [expenses]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addExpense = (expense) => setExpenses((prev) => [expense, ...prev]);
  const removeExpense = (id) => setExpenses((prev) => prev.filter((e) => e.id !== id));

  const login = (email) => {
    setUser(email);
    localStorage.setItem('user_email', email);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user_email');
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, user, login, logout, theme, setTheme }}>
      {children}
    </ExpenseContext.Provider>
  );
};
