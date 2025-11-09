import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f7f', '#a0e7e5'];

const ChartDashboard = ({ expenses }) => {
  const categoryData = useMemo(() => {
    const map = {};
    expenses.forEach((e) => (map[e.category] = (map[e.category] || 0) + Number(e.amount)));
    return Object.keys(map).map((k) => ({ category: k, amount: map[k] }));
  }, [expenses]);

  return (
    <div className="p-5 bg-[var(--card)] rounded-2xl shadow-lg backdrop-blur-lg border border-white/20">
  <h3 className="font-semibold mb-4">Expense Distribution</h3>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie data={categoryData} dataKey="amount" nameKey="category" outerRadius={90}>
        {categoryData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>

  );
};

export default ChartDashboard;
