import React, { createContext, useContext, useState, useCallback } from "react";

export type Screen =
  | "home"
  | "catatan"
  | "budget-empty"
  | "budget-intro"
  | "budget-step1"
  | "budget-step2"
  | "budget-dashboard"
  | "budget-category"
  | "goal-step1"
  | "goal-step2"
  | "goal-review"
  | "goals-dashboard"
  | "goal-detail"
  | "evaluasi"
  | "report"
  | "profil";

export type UserState = "firstUser" | "budgetOnly" | "fullIntegration" | "overspend";
export type Month = "Feb" | "Mar" | "Apr" | "Mei";
export type Filter = "Semua" | "Pengeluaran" | "Pemasukan" | "Ke goal";
export type TxType = "Pengeluaran" | "Pemasukan";

export interface Transaction {
  id: string;
  type: TxType;
  category: string;
  desc: string;
  amount: number;
  date: string;
  month: Month;
  budgetTag?: boolean;
  goalTag?: boolean;
}

export interface Goal {
  id: string;
  name: string;
  category: string;
  icon: string;
  target: number;
  current: number;
  deadline: string;
  achieved: boolean;
}

export interface BudgetCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  budget: number;
  spent: number;
}

interface AppState {
  screen: Screen;
  prevScreen: Screen;
  userState: UserState;
  selectedMonth: Month;
  filter: Filter;
  showCatatForm: boolean;
  catatType: TxType;
  hasBudget: boolean;
  hasGoal: boolean;
  budgetAmount: number;
  budgetCategories: BudgetCategory[];
  goals: Goal[];
  transactions: Transaction[];
  selectedCategoryId: string | null;
  selectedGoalId: string | null;
  toast: { show: boolean; message: string };
  selectedGoalCat: string;
  goalForm: { name: string; amount: string; deadline: string };
  budgetFormAmount: string;
  categoryBudgets: Record<string, string>;
}

interface AppActions {
  navigate: (screen: Screen) => void;
  goBack: () => void;
  setFilter: (f: Filter) => void;
  setMonth: (m: Month) => void;
  openCatatForm: (type?: TxType) => void;
  closeCatatForm: () => void;
  setCatatType: (t: TxType) => void;
  saveTransaction: (tx: Omit<Transaction, "id">) => void;
  saveBudget: () => void;
  setBudgetFormAmount: (v: string) => void;
  setCategoryBudget: (catId: string, v: string) => void;
  selectCategory: (id: string) => void;
  selectGoal: (id: string) => void;
  setSelectedGoalCat: (cat: string) => void;
  setGoalForm: (form: Partial<{ name: string; amount: string; deadline: string }>) => void;
  createGoal: () => void;
  addGoalContribution: (goalId: string, amount: number) => void;
  showToast: (msg: string) => void;
}

const defaultTransactions: Transaction[] = [
  { id: "1", type: "Pengeluaran", category: "Makan", desc: "Makan siang di kantor", amount: 75000, date: "16 Apr 2026", month: "Apr", budgetTag: true },
  { id: "2", type: "Pengeluaran", category: "Makan", desc: "Makan siang di kantor", amount: 75000, date: "16 Apr 2026", month: "Apr", budgetTag: true },
  { id: "3", type: "Pemasukan", category: "Gaji", desc: "Gaji Libur", amount: 500000, date: "11 Apr 2026", month: "Apr" },
  { id: "4", type: "Pengeluaran", category: "Makan", desc: "Makan siang di kantor", amount: 75000, date: "11 Apr 2026", month: "Apr", budgetTag: true },
  { id: "5", type: "Pengeluaran", category: "Makan", desc: "Makan siang di kantor", amount: 75000, date: "9 Apr 2026", month: "Apr", budgetTag: true },
  { id: "6", type: "Pengeluaran", category: "Transportasi", desc: "Ojek pulang kerja", amount: 25000, date: "9 Apr 2026", month: "Apr", budgetTag: true },
  { id: "7", type: "Pengeluaran", category: "Makan", desc: "Kopi + snack", amount: 40000, date: "14 Mar 2026", month: "Mar", budgetTag: true },
  { id: "8", type: "Pemasukan", category: "Bonus", desc: "Bonus proyek", amount: 1000000, date: "10 Mar 2026", month: "Mar" },
];

const defaultCategories: BudgetCategory[] = [
  { id: "makan", name: "Makan", icon: "🍽️", color: "#E47D5A", budget: 2000000, spent: 1400000 },
  { id: "transportasi", name: "Transportasi", icon: "🚗", color: "#3A5ED7", budget: 600000, spent: 300000 },
];

const defaultGoals: Goal[] = [
  { id: "g1", name: "Dana Darurat", category: "Rumah", icon: "🏠", target: 10000000, current: 3500000, deadline: "Des 2026", achieved: false },
];

const AppContext = createContext<(AppState & AppActions) | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    screen: "home",
    prevScreen: "home",
    userState: "fullIntegration",
    selectedMonth: "Apr",
    filter: "Semua",
    showCatatForm: false,
    catatType: "Pengeluaran",
    hasBudget: true,
    hasGoal: true,
    budgetAmount: 6000000,
    budgetCategories: defaultCategories,
    goals: defaultGoals,
    transactions: defaultTransactions,
    selectedCategoryId: null,
    selectedGoalId: null,
    toast: { show: false, message: "" },
    selectedGoalCat: "",
    goalForm: { name: "", amount: "", deadline: "" },
    budgetFormAmount: "6000000",
    categoryBudgets: { makan: "2000000", transportasi: "600000" },
  });

  const navigate = useCallback((screen: Screen) => {
    setState((s) => ({ ...s, prevScreen: s.screen, screen }));
  }, []);

  const goBack = useCallback(() => {
    setState((s) => ({ ...s, screen: s.prevScreen, prevScreen: "home" }));
  }, []);

  const setFilter = useCallback((filter: Filter) => setState((s) => ({ ...s, filter })), []);
  const setMonth = useCallback((selectedMonth: Month) => setState((s) => ({ ...s, selectedMonth })), []);

  const openCatatForm = useCallback((type?: TxType) => {
    setState((s) => ({ ...s, showCatatForm: true, catatType: type ?? "Pengeluaran" }));
  }, []);

  const closeCatatForm = useCallback(() => {
    setState((s) => ({ ...s, showCatatForm: false }));
  }, []);

  const setCatatType = useCallback((catatType: TxType) => setState((s) => ({ ...s, catatType })), []);

  const saveTransaction = useCallback((tx: Omit<Transaction, "id">) => {
    const id = Date.now().toString();
    setState((s) => ({
      ...s,
      transactions: [{ ...tx, id }, ...s.transactions],
      showCatatForm: false,
    }));
  }, []);

  const showToastFn = useCallback((msg: string) => {
    setState((s) => ({ ...s, toast: { show: true, message: msg } }));
    setTimeout(() => {
      setState((s) => ({ ...s, toast: { show: false, message: "" } }));
    }, 3000);
  }, []);

  const saveBudget = useCallback(() => {
    setState((s) => ({
      ...s,
      hasBudget: true,
      budgetAmount: parseInt(s.budgetFormAmount.replace(/\./g, "")) || 6000000,
      screen: "budget-dashboard",
      prevScreen: s.screen,
    }));
    setTimeout(() => showToastFn("Budget anda berhasil disimpan"), 300);
  }, [showToastFn]);

  const setBudgetFormAmount = useCallback((v: string) => setState((s) => ({ ...s, budgetFormAmount: v })), []);
  const setCategoryBudget = useCallback((catId: string, v: string) => {
    setState((s) => ({ ...s, categoryBudgets: { ...s.categoryBudgets, [catId]: v } }));
  }, []);

  const selectCategory = useCallback((id: string) => setState((s) => ({ ...s, selectedCategoryId: id, screen: "budget-category", prevScreen: s.screen })), []);
  const selectGoal = useCallback((id: string) => setState((s) => ({ ...s, selectedGoalId: id, screen: "goal-detail", prevScreen: s.screen })), []);

  const setSelectedGoalCat = useCallback((cat: string) => setState((s) => ({ ...s, selectedGoalCat: cat })), []);
  const setGoalForm = useCallback((form: Partial<{ name: string; amount: string; deadline: string }>) => {
    setState((s) => ({ ...s, goalForm: { ...s.goalForm, ...form } }));
  }, []);

  const createGoal = useCallback(() => {
    setState((s) => {
      const newGoal: Goal = {
        id: Date.now().toString(),
        name: s.goalForm.name || "Target Baru",
        category: s.selectedGoalCat,
        icon: getCatIcon(s.selectedGoalCat),
        target: parseInt(s.goalForm.amount?.replace(/\./g, "") || "5000000"),
        current: 0,
        deadline: s.goalForm.deadline || "Des 2026",
        achieved: false,
      };
      return {
        ...s,
        goals: [...s.goals, newGoal],
        hasGoal: true,
        screen: "goals-dashboard",
        prevScreen: s.screen,
      };
    });
    setTimeout(() => showToastFn("Target berhasil dibuat! 🎯"), 300);
  }, [showToastFn]);

  const addGoalContribution = useCallback((goalId: string, amount: number) => {
    setState((s) => ({
      ...s,
      goals: s.goals.map((g) =>
        g.id === goalId
          ? { ...g, current: Math.min(g.current + amount, g.target), achieved: g.current + amount >= g.target }
          : g
      ),
    }));
  }, []);

  const value = {
    ...state,
    navigate,
    goBack,
    setFilter,
    setMonth,
    openCatatForm,
    closeCatatForm,
    setCatatType,
    saveTransaction,
    saveBudget,
    setBudgetFormAmount,
    setCategoryBudget,
    selectCategory,
    selectGoal,
    setSelectedGoalCat,
    setGoalForm,
    createGoal,
    addGoalContribution,
    showToast: showToastFn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

function getCatIcon(cat: string) {
  const map: Record<string, string> = {
    Rumah: "🏠", Liburan: "✈️", Pendidikan: "📚", Kendaraan: "🚗",
    Kesehatan: "💊", Investasi: "📈", Pernikahan: "💍", Dana: "💰",
  };
  return map[cat] || "🎯";
}
