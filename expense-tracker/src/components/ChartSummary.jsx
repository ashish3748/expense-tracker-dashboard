import React, { useMemo } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function getMonthLabel(dateStr){
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleString(undefined, { month: "short", year: "numeric" });
}

export default function ChartSummary({ expenses }){
  const byCategory = useMemo(() => {
    const map = {};
    expenses.forEach(e => {
      map[e.category] = (map[e.category] || 0) + e.amount;
    });
    return map;
  }, [expenses]);

  const byMonth = useMemo(() => {
    const map = {};
    expenses.forEach(e => {
      const m = getMonthLabel(e.date);
      map[m] = (map[m] || 0) + e.amount;
    });
    // sort months by date
    const entries = Object.entries(map).sort((a,b)=>{
      const da = new Date(a[0]);
      const db = new Date(b[0]);
      return da - db;
    });
    return entries;
  }, [expenses]);

  const pieData = {
    labels: Object.keys(byCategory),
    datasets: [{ data: Object.values(byCategory), label: "By Category" }]
  };

  const barData = {
    labels: byMonth.map(x => x[0]),
    datasets: [{ label: "Monthly Total", data: byMonth.map(x => x[1]) }]
  };

  return (
    <div className="p-5 bg-[var(--card)] rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 mt-5">
  <h2 className="text-lg font-semibold mb-3">Expense Summary</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div>
      <h3 className="text-sm font-medium mb-2 text-gray-400">By Category</h3>
      <Pie data={pieData} />
    </div>
    <div>
      <h3 className="text-sm font-medium mb-2 text-gray-400">By Month</h3>
      <Bar data={barData} />
    </div>
  </div>
</div>

  );
}
