import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Moon, Sun, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout, theme, setTheme } = useContext(ExpenseContext);

  return (
    <nav className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 border-b border-white/20 dark:border-gray-700/40">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
          Expense Tracker
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {user && (
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
            >
              <LogOut size={18} /> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
