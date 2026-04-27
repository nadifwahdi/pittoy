import React from "react";
import { ChevronLeft, ChevronDown, Plus } from "lucide-react";
import { StatusBar } from "../StatusBar";
import { useApp, Month, Filter, Transaction } from "../AppContext";

const MONTHS: Month[] = ["Feb", "Mar", "Apr", "Mei"];
const FILTERS: Filter[] = ["Semua", "Pengeluaran", "Pemasukan"];

function formatRp(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

function groupByDate(txs: Transaction[]) {
  const map: Record<string, Transaction[]> = {};
  txs.forEach((tx) => {
    if (!map[tx.date]) map[tx.date] = [];
    map[tx.date].push(tx);
  });
  return Object.entries(map);
}

export function CatatanScreen() {
  const {
    navigate, goBack, openCatatForm,
    selectedMonth, setMonth,
    filter, setFilter,
    hasBudget, hasGoal,
    transactions, budgetAmount, budgetCategories, goals,
    userState,
  } = useApp();

  const allFilters: Filter[] = hasGoal
    ? ["Semua", "Pengeluaran", "Pemasukan", "Ke goal"]
    : ["Semua", "Pengeluaran", "Pemasukan"];

  const monthTx = transactions.filter((t) => t.month === selectedMonth);
  const filteredTx = monthTx.filter((t) => {
    if (filter === "Semua") return true;
    if (filter === "Ke goal") return t.goalTag;
    return t.type === filter;
  });

  const totalPengeluaran = monthTx.filter((t) => t.type === "Pengeluaran").reduce((s, t) => s + t.amount, 0);
  const totalPemasukan = monthTx.filter((t) => t.type === "Pemasukan").reduce((s, t) => s + t.amount, 0);
  const totalBudgetSpent = budgetCategories.reduce((s, c) => s + c.spent, 0);
  const budgetPct = budgetAmount > 0 ? Math.round((totalBudgetSpent / budgetAmount) * 100) : 0;
  const goalCurrent = goals.reduce((s, g) => s + g.current, 0);
  const goalTotal = goals.reduce((s, g) => s + g.target, 0);

  const grouped = groupByDate(filteredTx);

  const isEmpty = selectedMonth === "Mei";

  return (
    <div className="absolute inset-0 bg-[#F6F6F9] flex flex-col overflow-hidden">
      <StatusBar />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white z-10 pt-11 pb-2">
        {/* Nav bar */}
        <div className="flex items-center gap-4 px-5 py-3">
          <button onClick={goBack}>
            <ChevronLeft size={24} color="#2A353E" />
          </button>
          <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>
            Catatan Keuangan
          </p>
          <button className="flex items-center gap-1 border border-[#D9DFF6] rounded-full px-3 py-1">
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>2026</span>
            <ChevronDown size={14} color="#2A353E" />
          </button>
        </div>

        {/* Month tabs */}
        <div className="flex gap-2 px-5 pb-2">
          {MONTHS.map((m) => (
            <button
              key={m}
              onClick={() => setMonth(m)}
              className="px-4 py-1.5 rounded-full transition-all"
              style={{
                background: selectedMonth === m ? "#3A5ED7" : "transparent",
                border: selectedMonth === m ? "none" : "1px solid #D9DFF6",
              }}
            >
              <span style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: selectedMonth === m ? "white" : "#2A353E",
              }}>{m}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto mt-[148px] pb-20">
        {isEmpty ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center h-64 gap-4 px-6">
            <div className="text-6xl">🐾</div>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A353E", textAlign: "center" }}>
              Belum ada catatan di bulan ini
            </p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6", textAlign: "center" }}>
              Mulai catat transaksimu untuk melacak keuangan
            </p>
          </div>
        ) : (
          <div>
            {/* Summary Cards */}
            <div className="flex gap-3 px-4 pt-4">
              {/* Pengeluaran */}
              <div className="flex-1 rounded-2xl p-3" style={{ background: totalPengeluaran > (budgetAmount * 0.9) ? "#FFF0F0" : "#FFF5F2", border: "1px solid #FFD4C8" }}>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-4 h-4 rounded-full bg-[#DF0000] flex items-center justify-center">
                    <span style={{ fontSize: 8, color: "white" }}>✕</span>
                  </div>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#DF0000" }}>Pengeluaran</span>
                </div>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#DF0000" }}>
                  {isEmpty ? "Rp0" : formatRp(totalPengeluaran)}
                </p>
              </div>

              {/* Pemasukan */}
              <div className="flex-1 rounded-2xl p-3" style={{ background: "#F0FFF4", border: "1px solid #B3FFCA" }}>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-4 h-4 rounded-full bg-[#1FD64A] flex items-center justify-center">
                    <span style={{ fontSize: 8, color: "white" }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#1FD64A" }}>Pemasukan</span>
                </div>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#1FD64A" }}>
                  {isEmpty ? "Rp0" : formatRp(totalPemasukan)}
                </p>
              </div>
            </div>

            {/* Budget tracker */}
            {hasBudget && (
              <div className="mx-4 mt-3 bg-white rounded-2xl p-3" style={{ border: "1px solid #D9DFF6" }}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#2A353E" }}>Budget</span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>{budgetPct}% terpakai</span>
                </div>
                <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(budgetPct, 100)}%`,
                      background: budgetPct > 80 ? "#DF0000" : "#E47D5A",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#E57D5B" }}>
                    {formatRp(totalBudgetSpent)} terpakai
                  </span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#475663" }}>
                    dari {formatRp(budgetAmount)}
                  </span>
                </div>
              </div>
            )}

            {/* Goals tracker */}
            {hasGoal && (
              <div className="mx-4 mt-3 bg-white rounded-2xl p-3" style={{ border: "1px solid #D9DFF6" }}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#2A353E" }}>Goals</span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>
                    {goalTotal > 0 ? Math.round((goalCurrent / goalTotal) * 100) : 0}% tercapai
                  </span>
                </div>
                <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1FD64A] transition-all"
                    style={{ width: goalTotal > 0 ? `${Math.round((goalCurrent / goalTotal) * 100)}%` : "0%" }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#1FD64A" }}>
                    {formatRp(goalCurrent)} terkumpul
                  </span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#475663" }}>
                    dari {formatRp(goalTotal)}
                  </span>
                </div>
              </div>
            )}

            {/* Filter chips */}
            <div className="flex gap-2 px-4 mt-4 overflow-x-auto pb-1">
              {allFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full transition-all"
                  style={{
                    background: filter === f ? "#EAF0FF" : "white",
                    border: filter === f ? "1px solid #3A5ED7" : "1px solid #D9DFF6",
                  }}
                >
                  <span style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    color: filter === f ? "#3A5ED7" : "#2A353E",
                    whiteSpace: "nowrap",
                  }}>
                    {f === "Ke goal" ? "🎯 Ke goal" : f}
                    {f !== "Semua" && f !== "Ke goal" && (
                      <span> ({monthTx.filter((t) => t.type === f).length})</span>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Daftar Catatan */}
            <div className="px-4 mt-4">
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }}>Daftar Catatan</p>
              {filteredTx.length === 0 ? (
                <div className="text-center py-8">
                  <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>
                    Tidak ada transaksi
                  </p>
                </div>
              ) : (
                grouped.map(([date, txs]) => (
                  <div key={date} className="mt-3">
                    <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#8C9AA6" }} className="mb-2">
                      {date.includes("Apr") ? "Hari ini, " : ""}{date}
                    </p>
                    {txs.map((tx) => (
                      <div
                        key={tx.id}
                        className="bg-white rounded-xl p-3 mb-2 flex items-center justify-between active:opacity-80 cursor-pointer"
                        style={{ border: "1px solid #EFF1F6" }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#EAF0FF] flex items-center justify-center text-base">
                            {tx.category === "Makan" ? "🍽️" : tx.category === "Transportasi" ? "🚗" : tx.category === "Gaji" ? "💰" : tx.category === "Bonus" ? "🎁" : "📦"}
                          </div>
                          <div>
                            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#1F2C37" }}>{tx.desc}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }}>{tx.category}</span>
                              {tx.budgetTag && hasBudget && (
                                <span className="bg-[#EAF0FF] text-[#3A5ED7] rounded-full px-2 text-[10px]" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}>
                                  Budget
                                </span>
                              )}
                              {tx.goalTag && hasGoal && (
                                <span className="bg-[#F0FFF4] text-[#1FD64A] rounded-full px-2 text-[10px]" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}>
                                  🎯 Goal
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 600,
                          fontSize: 13,
                          color: tx.type === "Pengeluaran" ? "#DF0000" : "#1FD64A",
                        }}>
                          {tx.type === "Pengeluaran" ? "-" : "+"}{formatRp(tx.amount)}
                        </p>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sticky FAB Button */}
      <button
        onClick={() => openCatatForm()}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl px-4 py-4 z-20 active:scale-95 transition-transform"
        style={{
          background: "#3A5ED7",
          boxShadow: "0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px 0px rgba(0,0,0,0.3)"
        }}
      >
        <Plus size={20} color="white" strokeWidth={2.5} />
        <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Catatan</span>
      </button>
    </div>
  );
}
