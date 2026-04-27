import React, { useState } from "react";
import { ChevronLeft, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { StatusBar } from "../StatusBar";
import { useApp } from "../AppContext";

function formatRp(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

const QUICK_BUDGET = [1000000, 2000000, 3000000, 5000000, 6000000, 10000000];
const MIN_BUDGET = 500000; // Minimum recommended budget

/* ── Budget Empty State ── */
export function BudgetEmptyStateScreen() {
  const { navigate } = useApp();
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-white">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="text-6xl mb-4">📊</div>
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 20, color: "#2A353E", textAlign: "center" }}>
          Belum ada budget bulan ini
        </p>
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#8C9AA6", textAlign: "center" }} className="mt-2 mb-8">
          Mulai atur budget supaya pengeluaran lebih terkontrol
        </p>
        <button
          onClick={() => navigate("budget-intro")}
          className="w-full py-4 rounded-2xl active:scale-95 transition-transform"
          style={{ background: "#3A5ED7" }}
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Mulai Budgeting</span>
        </button>
        <button
          onClick={() => navigate("home")}
          className="mt-3 py-2"
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#8C9AA6" }}>Lewati dulu</span>
        </button>
      </div>
    </div>
  );
}

/* ── Budget Intro ── */
export function BudgetIntroScreen() {
  const { navigate } = useApp();
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: "linear-gradient(to bottom, #304EB3, #4CA9D5 65%)" }}>
      <StatusBar light />
      <div className="flex flex-col items-center px-6 flex-1 justify-between pb-12 pt-16">
        <div className="flex flex-col items-center gap-4">
          <div className="text-7xl mt-4">🤖</div>
          <div className="w-full mt-4">
            <p className="text-center mb-2" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 22, color: "white" }}>
              Atur pengeluaran lebih terkontrol bulan ini
            </p>
          </div>
          <div className="w-full bg-white/10 rounded-2xl p-4 gap-4 flex flex-col mt-2">
            {[
              { icon: "🎯", title: "Tentukan Target Budget Bulanan", desc: "Atur total pengeluaran sesuai kebutuhan agar tetap terkontrol." },
              { icon: "📊", title: "Pantau & Evaluasi Secara Otomatis", desc: "Lihat progress penggunaan budget agar tidak melewati batas." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="text-2xl mt-0.5">{item.icon}</div>
                <div>
                  <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: "white" }}>{item.title}</p>
                  <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("budget-step1")}
          className="w-full py-4 rounded-2xl mt-6 active:scale-95 transition-transform"
          style={{ background: "white" }}
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#3A5ED7" }}>Mulai Budgeting</span>
        </button>
      </div>
    </div>
  );
}

/* ── Budget Step 1 ── */
export function BudgetStep1Screen() {
  const { navigate, goBack, budgetFormAmount, setBudgetFormAmount } = useApp();
  const numVal = parseInt(budgetFormAmount?.replace(/\D/g, "") || "0");
  const display = numVal === 0 ? "0" : numVal.toLocaleString("id-ID");
  const isTooSmall = numVal > 0 && numVal < MIN_BUDGET;

  return (
    <div className="absolute inset-0 bg-white flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <div className="flex-1">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>Atur Budgeting</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Langkah 1 dari 2</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-5 h-1.5 bg-[#F1F2F4] rounded-full mb-6">
        <div className="h-full w-1/2 bg-[#3A5ED7] rounded-full" />
      </div>

      <div className="px-5 flex-1 overflow-y-auto">
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A353E" }}>Tulis total budget bulan ini</p>
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }} className="mt-1 mb-6">
          Total budget bisa berupa penghasilan bulanan, total penghasilan, atau lainnya.
        </p>

        {/* Amount input */}
        <div className={`flex items-center border-b-2 pb-2 mb-4 ${isTooSmall ? 'border-[#DF0000]' : 'border-[#3A5ED7]'}`}>
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 18, color: "#2A353E" }}>Rp</span>
          <input
            type="text"
            className="flex-1 ml-2 outline-none text-2xl font-bold bg-transparent"
            style={{ fontFamily: "'Quicksand', sans-serif", color: "#121212" }}
            value={display}
            onChange={(e) => setBudgetFormAmount(e.target.value.replace(/\D/g, ""))}
            placeholder="0"
          />
        </div>

        {/* Budget too small warning */}
        {isTooSmall && (
          <div className="bg-[#FFF1F0] rounded-xl p-3 flex items-start gap-2 mb-4">
            <span className="text-lg">⚠️</span>
            <div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#DF0000" }}>
                Budget terlalu kecil untuk kebutuhan bulanan
              </p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#E47D5A" }}>
                Minimal budget yang disarankan adalah {formatRp(MIN_BUDGET)}
              </p>
            </div>
          </div>
        )}

        {/* Quick amounts */}
        <div className="flex flex-wrap gap-2 mb-6">
          {QUICK_BUDGET.map((q) => (
            <button
              key={q}
              onClick={() => setBudgetFormAmount(q.toString())}
              className="px-3 py-1.5 rounded-full"
              style={{ border: "1px solid #D9DFF6", background: numVal === q ? "#EAF0FF" : "white" }}
            >
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: numVal === q ? "#3A5ED7" : "#2A353E", fontWeight: 600 }}>
                {formatRp(q)}
              </span>
            </button>
          ))}
        </div>

        {/* Recommendation banner */}
        {numVal >= MIN_BUDGET && (
          <div className="bg-[#EAF0FF] rounded-xl p-3 flex items-start gap-2 mb-4">
            <span className="text-lg">💡</span>
            <div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#3A5ED7" }}>
                Rekomendasi berdasarkan budget anda
              </p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#475663" }}>
                Periode 15 - 30 Apr. Budget harian kamu: {formatRp(Math.round(numVal / 30))}/hari
              </p>
            </div>
          </div>
        )}

        {numVal >= MIN_BUDGET && (
          <div className="bg-[#FFF5F2] rounded-xl p-3 flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#E47D5A" }}>
              Anda bisa juga menggunakan budget anda untuk mengevaluasi budget pengeluaran sesuai target pengeluaran
            </p>
          </div>
        )}
      </div>

      <div className="px-5 py-4">
        <button
          onClick={() => numVal >= MIN_BUDGET && navigate("budget-step2")}
          className="w-full py-4 rounded-2xl transition-all active:scale-95"
          style={{ background: numVal >= MIN_BUDGET ? "#3A5ED7" : "#CED4D9" }}
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Selanjutnya</span>
        </button>
      </div>
    </div>
  );
}

/* ── Budget Step 2 ── */
export function BudgetStep2Screen() {
  const { navigate, goBack, budgetAmount, budgetFormAmount, saveBudget, categoryBudgets, setCategoryBudget } = useApp();
  const totalBudget = parseInt(budgetFormAmount?.replace(/\D/g, "") || "0") || budgetAmount;

  const categories = [
    { id: "makan", name: "Makan", icon: "🍽️", defaultPct: 33 },
    { id: "transportasi", name: "Transportasi", icon: "🚗", defaultPct: 10 },
  ];

  const catTotal = categories.reduce((s, c) => {
    return s + (parseInt(categoryBudgets[c.id] || "0") || Math.round(totalBudget * c.defaultPct / 100));
  }, 0);

  const diff = totalBudget - catTotal;
  const isUnderAllocated = diff > 0;
  const isOverAllocated = diff < 0;
  const canSave = diff === 0;

  return (
    <div className="absolute inset-0 bg-[#F1F2F4] flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-white">
        <div className="flex items-center gap-4 px-5 pt-14 pb-4">
          <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
          <div className="flex-1">
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>Kategori Budget</p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Langkah 2 dari 2</p>
          </div>
        </div>
        <div className="mx-5 h-1.5 bg-[#F1F2F4] rounded-full mb-4">
          <div className="h-full w-full bg-[#3A5ED7] rounded-full" />
        </div>
        <div className="px-5 pb-3 flex items-center justify-between">
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>Total budget:</span>
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#3A5ED7" }}>{formatRp(totalBudget)}</span>
        </div>
        {isUnderAllocated && (
          <div className="mx-5 mb-3 bg-[#FFF5F2] rounded-xl p-2.5 flex items-center gap-2">
            <span className="text-sm">⚠️</span>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#E47D5A", fontWeight: 600 }}>
              Sisa {formatRp(diff)} belum dialokasikan
            </p>
          </div>
        )}
        {isOverAllocated && (
          <div className="mx-5 mb-3 bg-[#FFF1F0] rounded-xl p-2.5 flex items-center gap-2">
            <span className="text-sm">❌</span>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#DF0000", fontWeight: 600 }}>
              Melebihi budget +{formatRp(Math.abs(diff))}
            </p>
          </div>
        )}
        {canSave && (
          <div className="mx-5 mb-3 bg-[#E8F5E9] rounded-xl p-2.5 flex items-center gap-2">
            <span className="text-sm">✅</span>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#4CAF50", fontWeight: 600 }}>
              Budget sudah sesuai alokasi
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {categories.map((cat) => {
          const catBudget = parseInt(categoryBudgets[cat.id] || "0") || Math.round(totalBudget * cat.defaultPct / 100);
          const pct = Math.round((catBudget / totalBudget) * 100);

          return (
            <div key={cat.id} className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{cat.icon}</span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }}>{cat.name}</span>
                </div>
                <button>
                  <X size={18} color="#8C9AA6" />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>Rp</span>
                <input
                  type="text"
                  className="flex-1 outline-none p-2 rounded-lg"
                  style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#2A353E", background: "#F1F2F4" }}
                  value={catBudget.toLocaleString("id-ID")}
                  onChange={(e) => setCategoryBudget(cat.id, e.target.value.replace(/\D/g, ""))}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3A5ED7] rounded-full transition-all"
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>{pct}%</span>
              </div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }} className="mt-1">
                Saldo {formatRp(totalBudget)}/hari
              </p>
            </div>
          );
        })}

        {/* Add category */}
        <button className="w-full py-3 rounded-2xl border-2 border-dashed border-[#D9DFF6] flex items-center justify-center gap-2">
          <Plus size={18} color="#3A5ED7" />
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#3A5ED7" }}>Tambah Kategori</span>
        </button>
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6", textAlign: "center" }}>
          Anda bisa ubah anggaran tiap kategori dan menambahkan kategori baru
        </p>
      </div>

      <div className="px-4 py-4 bg-white border-t border-[#EFF1F6]">
        <button
          onClick={() => canSave && saveBudget()}
          className="w-full py-4 rounded-2xl transition-all active:scale-95"
          style={{ background: canSave ? "#3A5ED7" : "#CED4D9" }}
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Simpan Budget</span>
        </button>
      </div>
    </div>
  );
}

/* ── Budget Dashboard ── */
export function BudgetDashboardScreen() {
  const { navigate, goBack, budgetAmount, budgetCategories, openCatatForm, selectCategory } = useApp();

  const totalSpent = budgetCategories.reduce((s, c) => s + c.spent, 0);
  const sisa = budgetAmount - totalSpent;
  const isBudgetHabis = sisa <= 0;

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: "#F0F2F4" }}>
      {/* Header gradient */}
      <div className="relative" style={{ background: "linear-gradient(to bottom, #304EB3, #4CA9D5 65%)", paddingBottom: 80 }}>
        <StatusBar light />
        <div className="flex items-center gap-4 px-5 pt-14 pb-2">
          <button onClick={goBack}><ChevronLeft size={24} color="white" /></button>
          <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>Budget</p>
          <div className="w-6" />
        </div>

        <div className="flex flex-col items-center mt-2">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
            {isBudgetHabis ? "Budget Habis" : "Sisa Budget"}
          </p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 28, color: "white" }}>
            {isBudgetHabis ? "😬" : formatRp(sisa)}
          </p>
          {!isBudgetHabis && (
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              {formatRp(Math.round(sisa / 14))}/hari
            </p>
          )}
          {isBudgetHabis && (
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)", textAlign: "center" }} className="px-8 mt-1">
              Kurangi pengeluaran atau tambah budget
            </p>
          )}
        </div>

        {/* Budget bar */}
        <div className="mx-5 mt-3 bg-white rounded-2xl p-3">
          <div className="flex justify-between mb-2">
            <div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Terpakai</p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#E57D5B" }}>{formatRp(totalSpent)}</p>
            </div>
            <div className="text-right">
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Dari</p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#475663" }}>{formatRp(budgetAmount)}</p>
            </div>
          </div>
          <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${Math.min(Math.round((totalSpent / budgetAmount) * 100), 100)}%`,
                background: "#E47D5A",
              }}
            />
          </div>
        </div>
      </div>

      {/* Catat Keuangan button */}
      <div className="mx-5 -mt-10 z-10">
        <button
          onClick={() => openCatatForm()}
          className="w-full flex items-center justify-between bg-[#3A5ED7] rounded-2xl px-5 py-3 shadow-md active:scale-95 transition-transform"
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 15, color: "white" }}>Catat Keuangan</span>
          <div className="bg-white/20 rounded-full p-1">
            <Plus size={18} color="white" />
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6">
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">
          Kategori budget
        </p>

        {budgetCategories.map((cat) => {
          const pct = Math.round((cat.spent / cat.budget) * 100);
          return (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.id)}
              className="w-full bg-white rounded-2xl p-4 mb-3 active:opacity-80"
              style={{ border: "1px solid #EFF1F6" }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{cat.icon}</span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }}>{cat.name}</span>
                </div>
                <ChevronLeft size={18} color="#8C9AA6" className="rotate-180" />
              </div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#E57D5B", fontWeight: 600 }}>
                  Sisa {formatRp(cat.budget - cat.spent)}
                </span>
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>
                  {formatRp(Math.round((cat.budget - cat.spent) / 14))}/hari
                </span>
              </div>
              <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${Math.min(pct, 100)}%`, background: pct > 80 ? "#DF0000" : cat.color }}
                />
              </div>
            </button>
          );
        })}

        <button className="w-full py-3 rounded-2xl border border-[#D9DFF6] bg-white flex items-center justify-center gap-2">
          <Plus size={16} color="#3A5ED7" />
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#3A5ED7" }}>Tambah Kategori</span>
        </button>
      </div>
    </div>
  );
}

/* ── Budget Category Detail ── */
export function BudgetCategoryScreen() {
  const { goBack, budgetCategories, selectedCategoryId, transactions } = useApp();
  const cat = budgetCategories.find((c) => c.id === selectedCategoryId) || budgetCategories[0];
  if (!cat) return null;

  const catTx = transactions.filter((t) => t.category.toLowerCase() === cat.name.toLowerCase());

  const MONTHS_CHART = [
    { label: "Feb", height: 40, val: 7250 },
    { label: "Mar", height: 17, val: 5800 },
    { label: "Apr", height: 26, val: 6200 },
    { label: "May", height: 27, active: true, val: 7150 },
    { label: "Jun", height: 40, val: 8000 },
    { label: "Jul", height: 1, val: 0 },
    { label: "Aug", height: 1, val: 0 },
    { label: "Sep", height: 26, val: 11700 },
  ];

  return (
    <div className="absolute inset-0 bg-white flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 20, color: "#2A353E" }}>{cat.name}</p>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Header info */}
        <div className="flex flex-col items-center pb-4 pt-2 bg-white">
          <span className="text-4xl mb-2">{cat.icon}</span>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#475663" }}>Sisa Budget</p>
          <div className="flex items-center gap-2">
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 22, color: "#2A353E" }}>
              {formatRp(cat.budget - cat.spent)}.
            </p>
            <span className="text-sm">✏️</span>
          </div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>
            {formatRp(Math.round((cat.budget - cat.spent) / 14))}/hari
          </p>
        </div>

        <div className="h-3 bg-[#F6F6F9]" />

        {/* Usage bar */}
        <div className="px-4 py-4 bg-white">
          <div className="rounded-2xl p-3" style={{ border: "1px solid #D9DFF6" }}>
            <div className="flex justify-between mb-2">
              <div>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Terpakai</p>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 15, color: "#E57D5B" }}>{formatRp(cat.spent)}</p>
              </div>
              <div className="text-right">
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Dari</p>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 15, color: "#475663" }}>{formatRp(cat.budget)}</p>
              </div>
            </div>
            <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden mb-2">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.round((cat.spent / cat.budget) * 100)}%`,
                  background: cat.color,
                }}
              />
            </div>
            <div className="flex justify-between">
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }}>22 Feb</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }}>28 Feb</span>
            </div>
          </div>
        </div>

        <div className="h-3 bg-[#F6F6F9]" />

        {/* Monthly history chart */}
        <div className="px-4 py-4 bg-white">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">
            Riwayat Pengeluaran Bulanan
          </p>
          <div className="flex items-end gap-2 h-20">
            {MONTHS_CHART.map((m) => (
              <div key={m.label} className="flex-1 flex flex-col items-center gap-1">
                {m.height > 1 && (
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 9, color: m.active ? "#3A5ED7" : "#8C9AA6" }}>
                    {m.val > 999 ? (m.val / 1000).toFixed(1) + "k" : m.val}
                  </span>
                )}
                <div
                  className="w-full rounded-t-lg"
                  style={{
                    height: m.height,
                    background: m.active ? "#3A5ED7" : "#CED4D9",
                    minHeight: 2,
                  }}
                />
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 10, color: m.active ? "#3A5ED7" : "#8C9AA6" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-3 bg-[#F6F6F9]" />

        {/* Transactions */}
        <div className="px-4 py-4 bg-white">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">
            Catatan Transaksi
          </p>
          {catTx.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-4xl mb-2">📝</span>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6", textAlign: "center" }}>
                Belum ada pengeluaran di kategori ini
              </p>
            </div>
          ) : (
            catTx.map((tx) => (
              <div key={tx.id} className="rounded-xl p-3 mb-2 flex justify-between items-center" style={{ border: "1px solid #D9DFF6" }}>
                <div>
                  <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#1F2C37" }}>{tx.desc}</p>
                  <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }}>{tx.date}</p>
                </div>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#DF0000" }}>
                  -{formatRp(tx.amount)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
