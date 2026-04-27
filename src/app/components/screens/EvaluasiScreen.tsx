import React, { useState } from "react";
import { ChevronLeft, Share2, TrendingUp, TrendingDown } from "lucide-react";
import { StatusBar } from "../StatusBar";
import { useApp } from "../AppContext";

function formatRp(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

const REFLECTIONS = [
  "Pengeluaran sesuai rencana",
  "Perlu kurangi makan di luar",
  "Transportasi bisa dihemat",
  "Sudah menabung lebih banyak",
  "Perlu tambah pemasukan",
  "Senang dengan progress goals",
];

/* ── Evaluasi Summary ── */
export function EvaluasiScreen() {
  const { navigate, goBack, transactions, budgetAmount, budgetCategories, goals } = useApp();
  const [activeChips, setActiveChips] = useState<string[]>([]);

  const aprTx = transactions.filter((t) => t.month === "Apr");
  const totalPengeluaran = aprTx.filter((t) => t.type === "Pengeluaran").reduce((s, t) => s + t.amount, 0);
  const totalPemasukan = aprTx.filter((t) => t.type === "Pemasukan").reduce((s, t) => s + t.amount, 0);
  const totalBudgetSpent = budgetCategories.reduce((s, c) => s + c.spent, 0);
  const budgetPct = budgetAmount > 0 ? Math.round((totalBudgetSpent / budgetAmount) * 100) : 0;
  const savings = totalPemasukan - totalPengeluaran;

  const toggleChip = (chip: string) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  return (
    <div className="absolute inset-0 bg-[#F6F6F9] flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4 bg-white">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>
          Evaluasi Keuangan
        </p>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Summary hero */}
        <div
          className="mx-4 mt-4 rounded-3xl p-5"
          style={{ background: "linear-gradient(135deg, #304EB3, #4CA9D5)" }}
        >
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.9)" }} className="mb-1">
            📊 Ringkasan April 2026
          </p>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="bg-white/15 rounded-2xl p-3">
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>Pemasukan</p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>{formatRp(totalPemasukan)}</p>
            </div>
            <div className="bg-white/15 rounded-2xl p-3">
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>Pengeluaran</p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#FFB3A7" }}>{formatRp(totalPengeluaran)}</p>
            </div>
            <div className="bg-white/15 rounded-2xl p-3">
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>Tabungan</p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: savings >= 0 ? "#A7FFB8" : "#FFB3A7" }}>
                {formatRp(Math.abs(savings))}
              </p>
            </div>
            <div className="bg-white/15 rounded-2xl p-3">
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>Budget terpakai</p>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: budgetPct > 80 ? "#FFB3A7" : "white" }}>
                {budgetPct}%
              </p>
            </div>
          </div>
        </div>

        {/* Insight cards */}
        <div className="mx-4 mt-4 space-y-3">
          {/* Spending insight */}
          <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
            <div className="flex items-center gap-2 mb-2">
              {budgetPct > 80 ? <TrendingDown size={18} color="#DF0000" /> : <TrendingUp size={18} color="#1FD64A" />}
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }}>
                {budgetPct > 80 ? "Pengeluaran Melampaui Batas!" : "Pengeluaran Terkontrol"}
              </p>
            </div>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#475663" }}>
              {budgetPct > 80
                ? `Pengeluaran kamu ${budgetPct}% dari budget. Perlu lebih hati-hati bulan depan.`
                : `Bagus! Kamu berhasil mengelola ${budgetPct}% dari budget bulan ini.`}
            </p>
          </div>

          {/* Goals insight */}
          {goals.length > 0 && (
            <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🎯</span>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }}>Progress Target</p>
              </div>
              {goals.map((g) => {
                const pct = Math.round((g.current / g.target) * 100);
                return (
                  <div key={g.id} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>{g.name}</span>
                      <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#3A5ED7", fontWeight: 600 }}>{pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#3A5ED7] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Top spending */}
          <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">
              Pengeluaran Terbesar
            </p>
            {budgetCategories.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between py-2 border-b border-[#F1F2F4] last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{cat.icon}</span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>{cat.name}</span>
                </div>
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#DF0000" }}>
                  {formatRp(cat.spent)}
                </span>
              </div>
            ))}
          </div>

          {/* Reflection chips */}
          <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">
              Refleksi Bulan Ini
            </p>
            <div className="flex flex-wrap gap-2">
              {REFLECTIONS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className="px-3 py-1.5 rounded-full transition-all"
                  style={{
                    background: activeChips.includes(chip) ? "#EAF0FF" : "#F6F6F9",
                    border: activeChips.includes(chip) ? "1px solid #3A5ED7" : "1px solid #D9DFF6",
                  }}
                >
                  <span style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    color: activeChips.includes(chip) ? "#3A5ED7" : "#2A353E",
                  }}>{chip}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="px-4 mt-4 space-y-3">
          <button
            onClick={() => navigate("budget-step1")}
            className="w-full py-4 rounded-2xl bg-[#3A5ED7] active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span className="text-lg">📋</span>
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>
              Atur budget bulan depan
            </span>
          </button>
          <button
            onClick={() => navigate("report")}
            className="w-full py-4 rounded-2xl flex items-center justify-center gap-2"
            style={{ background: "white", border: "1px solid #3A5ED7" }}
          >
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#3A5ED7" }}>
              Lihat Laporan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Financial Report ── */
export function FinancialReportScreen() {
  const { navigate, goBack, transactions, budgetAmount, budgetCategories } = useApp();
  const [showShareSheet, setShowShareSheet] = useState(false);

  const aprTx = transactions.filter((t) => t.month === "Apr");
  const totalPengeluaran = aprTx.filter((t) => t.type === "Pengeluaran").reduce((s, t) => s + t.amount, 0);
  const totalPemasukan = aprTx.filter((t) => t.type === "Pemasukan").reduce((s, t) => s + t.amount, 0);

  return (
    <div className="absolute inset-0 bg-[#F6F6F9] flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4 bg-white">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>
          Laporan Keuangan
        </p>
        <button onClick={() => setShowShareSheet(true)}>
          <Share2 size={22} color="#3A5ED7" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 px-4 pt-4 space-y-4">
        {/* Period */}
        <div className="text-center">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A353E" }}>April 2026</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>1 Apr – 30 Apr 2026</p>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">Ringkasan</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>Total Pemasukan</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: "#1FD64A" }}>{formatRp(totalPemasukan)}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>Total Pengeluaran</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: "#DF0000" }}>{formatRp(totalPengeluaran)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-[#F1F2F4]">
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: "#2A353E" }}>Selisih</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: totalPemasukan - totalPengeluaran >= 0 ? "#1FD64A" : "#DF0000" }}>
                {formatRp(Math.abs(totalPemasukan - totalPengeluaran))}
              </span>
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">Breakdown Kategori</p>
          {budgetCategories.map((cat) => (
            <div key={cat.id} className="mb-3">
              <div className="flex justify-between mb-1">
                <div className="flex items-center gap-1">
                  <span>{cat.icon}</span>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>{cat.name}</span>
                </div>
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#DF0000" }}>{formatRp(cat.spent)}</span>
              </div>
              <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${Math.round((cat.spent / totalPengeluaran) * 100)}%`, background: cat.color }} />
              </div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }} className="mt-0.5">
                {Math.round((cat.spent / totalPengeluaran) * 100)}% dari total pengeluaran
              </p>
            </div>
          ))}
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }} className="mb-3">Semua Transaksi</p>
          {aprTx.map((tx) => (
            <div key={tx.id} className="flex justify-between items-center py-2 border-b border-[#F1F2F4] last:border-0">
              <div>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#2A353E" }}>{tx.desc}</p>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#8C9AA6" }}>{tx.date}</p>
              </div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: tx.type === "Pengeluaran" ? "#DF0000" : "#1FD64A" }}>
                {tx.type === "Pengeluaran" ? "-" : "+"}{formatRp(tx.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Share sheet */}
      {showShareSheet && (
        <>
          <div className="absolute inset-0 bg-black/50 z-30" onClick={() => setShowShareSheet(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-40 p-5">
            <div className="flex justify-center mb-4"><div className="w-10 h-1 bg-[#CED4D9] rounded-full" /></div>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }} className="mb-4">Bagikan Laporan</p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {["WhatsApp", "Email", "Simpan PDF", "Copy Link"].map((option) => (
                <button key={option} onClick={() => setShowShareSheet(false)} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF0FF] flex items-center justify-center text-xl">
                    {option === "WhatsApp" ? "📱" : option === "Email" ? "📧" : option === "Simpan PDF" ? "📄" : "🔗"}
                  </div>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, color: "#2A353E", textAlign: "center" }}>{option}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setShowShareSheet(false)} className="w-full py-3 rounded-2xl" style={{ border: "1px solid #D9DFF6" }}>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#8C9AA6" }}>Batal</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
