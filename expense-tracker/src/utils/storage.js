const KEY = "expense_tracker_v1";

export function loadExpenses(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return [];
    return JSON.parse(raw);
  }catch(e){
    console.error("loadExpenses error", e);
    return [];
  }
}

export function saveExpenses(expenses){
  try{
    localStorage.setItem(KEY, JSON.stringify(expenses));
  }catch(e){
    console.error("saveExpenses error", e);
  }
}
