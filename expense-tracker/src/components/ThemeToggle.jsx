import React, { useEffect, useState } from "react";

const THEME_KEY = "expense_theme";

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      <button
  onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
  className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow hover:opacity-90"
>
  {theme === "dark" ? "Light Mode" : "Dark Mode"}
</button>

    </div>
  );
}
