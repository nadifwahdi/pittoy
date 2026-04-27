import React, { useState } from "react";
import { ChevronLeft, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { StatusBar } from "../StatusBar";
import { useApp, Goal } from "../AppContext";

function formatRp(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

const GOAL_CATEGORIES = [
  { id: "Rumah", icon: "🏠", label: "Rumah" },
  { id: "Liburan", icon: "✈️", label: "Liburan" },
  { id: "Pendidikan", icon: "📚", label: "Pendidikan" },
  { id: "Kendaraan", icon: "🚗", label: "Kendaraan" },
  { id: "Kesehatan", icon: "💊", label: "Kesehatan" },
  { id: "Investasi", icon: "📈", label: "Investasi" },
  { id: "Pernikahan", icon: "💍", label: "Pernikahan" },
  { id: "Dana", icon: "💰", label: "Dana Darurat" },
];

/* ── Goals Dashboard ── */
export function GoalsDashboardScreen() {
  const { navigate, goBack, goals, hasGoal, selectGoal, openCatatForm } = useApp();
  const [showContrib, setShowContrib] = useState(false);
  const [contribGoalId, setContribGoalId] = useState("");
  const [contribAmount, setContribAmount] = useState("");
  const { addGoalContribution } = useApp();

  const hasAchieved = goals.some((g) => g.achieved);

  return (
    <div className="absolute inset-0 bg-[#F6F6F9] flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4 bg-white">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>
          Target Keuangan
        </p>
        <div className="w-6" />
      </div>

      {/* Celebration if any goal achieved */}
      <AnimatePresence>
        {hasAchieved && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mx-4 mt-3 bg-[#F0FFF4] rounded-2xl p-3 flex items-center gap-2"
            style={{ border: "1px solid #B3FFCA" }}
          >
            <span className="text-2xl">🎉</span>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: "#1FD64A" }}>
              Selamat! Kamu berhasil mencapai targetmu!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-6">
        {!hasGoal || goals.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
            <div className="text-6xl">🎯</div>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A353E" }}>
              Belum ada target keuangan
            </p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }}>
              Buat target pertamamu dan mulai menabung untuk impian
            </p>
            <button
              onClick={() => navigate("goal-step1")}
              className="px-6 py-3 bg-[#3A5ED7] rounded-2xl"
            >
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>Buat Target Sekarang</span>
            </button>
          </div>
        ) : (
          <>
            {goals.map((goal) => {
              const pct = Math.round((goal.current / goal.target) * 100);
              return (
                <div
                  key={goal.id}
                  onClick={() => selectGoal(goal.id)}
                  className="w-full bg-white rounded-2xl p-4 mb-3 text-left active:opacity-80 cursor-pointer"
                  style={{ border: "1px solid #EFF1F6" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{goal.icon}</span>
                      <div>
                        <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#2A353E" }}>{goal.name}</p>
                        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Target: {goal.deadline}</p>
                      </div>
                    </div>
                    {goal.achieved && <span className="text-lg">🏆</span>}
                  </div>
                  <div className="w-full h-2 bg-[#F1F2F4] rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${Math.min(pct, 100)}%`,
                        background: goal.achieved ? "#1FD64A" : "#3A5ED7",
                      }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#3A5ED7", fontWeight: 600 }}>
                      {formatRp(goal.current)}
                    </span>
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>
                      {pct}% dari {formatRp(goal.target)}
                    </span>
                  </div>

                  {!goal.achieved && (
                    <button
                      className="mt-3 w-full py-2 rounded-xl bg-[#EAF0FF] active:bg-[#3A5ED7] active:text-white transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        setContribGoalId(goal.id);
                        setShowContrib(true);
                      }}
                    >
                      <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 13, color: "#3A5ED7" }}>
                        + Tambah Kontribusi
                      </span>
                    </button>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => navigate("goal-step1")}
              className="w-full py-3 rounded-2xl border-2 border-dashed border-[#D9DFF6] flex items-center justify-center gap-2"
            >
              <Plus size={16} color="#3A5ED7" />
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#3A5ED7" }}>
                Buat Target Finansial Baru
              </span>
            </button>
          </>
        )}
      </div>

      {/* Contribution overlay */}
      <AnimatePresence>
        {showContrib && (
          <>
            <motion.div
              className="absolute inset-0 z-30 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContrib(false)}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-40 p-5"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-10 h-1 bg-[#CED4D9] rounded-full" />
              </div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }} className="mb-4">
                Tambah Kontribusi
              </p>
              <div className="flex items-center border-b-2 border-[#3A5ED7] pb-2 mb-4">
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 16, color: "#2A353E" }}>Rp</span>
                <input
                  type="number"
                  className="flex-1 ml-2 outline-none text-xl font-bold bg-transparent"
                  style={{ fontFamily: "'Quicksand', sans-serif", color: "#121212" }}
                  value={contribAmount}
                  onChange={(e) => setContribAmount(e.target.value)}
                  placeholder="0"
                  autoFocus
                />
              </div>
              <div className="flex gap-2 flex-wrap mb-6">
                {[50000, 100000, 250000, 500000].map((a) => (
                  <button
                    key={a}
                    onClick={() => setContribAmount(a.toString())}
                    className="px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid #D9DFF6" }}
                  >
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>{formatRp(a)}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const amt = parseInt(contribAmount);
                  if (amt > 0 && contribGoalId) {
                    addGoalContribution(contribGoalId, amt);
                    setShowContrib(false);
                    setContribAmount("");
                  }
                }}
                className="w-full py-4 rounded-2xl bg-[#3A5ED7] active:scale-95 transition-transform"
              >
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Simpan</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Goal Step 1: Category Picker ── */
export function GoalStep1Screen() {
  const { navigate, goBack, selectedGoalCat, setSelectedGoalCat } = useApp();

  return (
    <div className="absolute inset-0 bg-white flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <div className="flex-1">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>Buat Target Baru</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Langkah 1 dari 3</p>
        </div>
      </div>

      <div className="mx-5 h-1.5 bg-[#F1F2F4] rounded-full mb-4">
        <div className="h-full rounded-full bg-[#3A5ED7]" style={{ width: "33%" }} />
      </div>

      <div className="px-5 flex-1 overflow-y-auto">
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A353E" }} className="mb-2">
          Pilih Kategori Target
        </p>
        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#8C9AA6" }} className="mb-5">
          Tentukan jenis target keuanganmu
        </p>

        <div className="grid grid-cols-4 gap-3">
          {GOAL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedGoalCat(cat.id)}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl transition-all"
              style={{
                background: selectedGoalCat === cat.id ? "#EAF0FF" : "#F6F6F9",
                border: selectedGoalCat === cat.id ? "2px solid #3A5ED7" : "2px solid transparent",
              }}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 10, fontWeight: 600, color: selectedGoalCat === cat.id ? "#3A5ED7" : "#2A353E", textAlign: "center" }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 py-4">
        <button
          onClick={() => selectedGoalCat && navigate("goal-step2")}
          className="w-full py-4 rounded-2xl transition-all active:scale-95"
          style={{ background: selectedGoalCat ? "#3A5ED7" : "#CED4D9" }}
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Selanjutnya</span>
        </button>
      </div>
    </div>
  );
}

/* ── Goal Step 2: Detail Form ── */
export function GoalStep2Screen() {
  const { navigate, goBack, selectedGoalCat, goalForm, setGoalForm } = useApp();
  const cat = GOAL_CATEGORIES.find((c) => c.id === selectedGoalCat);

  const isValid = goalForm.name && goalForm.amount;

  return (
    <div className="absolute inset-0 bg-white flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <div className="flex-1">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>Detail Target</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Langkah 2 dari 3</p>
        </div>
      </div>

      <div className="mx-5 h-1.5 bg-[#F1F2F4] rounded-full mb-6">
        <div className="h-full rounded-full bg-[#3A5ED7]" style={{ width: "66%" }} />
      </div>

      <div className="px-5 flex-1 overflow-y-auto space-y-4">
        {/* Category pill */}
        <div className="flex items-center gap-2 bg-[#EAF0FF] rounded-full px-4 py-2 self-start inline-flex">
          <span className="text-lg">{cat?.icon}</span>
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#3A5ED7" }}>{cat?.label}</span>
        </div>

        <div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }} className="mb-1">Nama Target *</p>
          <input
            type="text"
            className="w-full p-3 rounded-xl outline-none"
            style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#2A353E", border: "1px solid #D9DFF6" }}
            placeholder={`Cth: ${cat?.label || "Target"} Baru`}
            value={goalForm.name}
            onChange={(e) => setGoalForm({ name: e.target.value })}
          />
        </div>

        <div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }} className="mb-1">Target Nominal *</p>
          <div className="flex items-center border rounded-xl p-3" style={{ border: "1px solid #D9DFF6" }}>
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#8C9AA6" }}>Rp</span>
            <input
              type="number"
              className="flex-1 ml-2 outline-none bg-transparent"
              style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#2A353E" }}
              placeholder="0"
              value={goalForm.amount}
              onChange={(e) => setGoalForm({ amount: e.target.value })}
            />
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }} className="mb-1">Target Selesai</p>
          <input
            type="text"
            className="w-full p-3 rounded-xl outline-none"
            style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#2A353E", border: "1px solid #D9DFF6" }}
            placeholder="Cth: Des 2026"
            value={goalForm.deadline}
            onChange={(e) => setGoalForm({ deadline: e.target.value })}
          />
        </div>

        <div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }} className="mb-1">Cicilan Bulanan (estimasi)</p>
          <div className="bg-[#EAF0FF] rounded-xl p-3">
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "#3A5ED7" }}>
              {goalForm.amount ? formatRp(Math.round(parseInt(goalForm.amount) / 12)) : "Rp0"}
              <span style={{ fontWeight: 400, fontSize: 12, color: "#8C9AA6" }}>/bulan</span>
            </p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Estimasi berdasarkan target dan deadline</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <button
          onClick={() => isValid && navigate("goal-review")}
          className="w-full py-4 rounded-2xl transition-all active:scale-95"
          style={{ background: isValid ? "#3A5ED7" : "#CED4D9" }}
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Selanjutnya</span>
        </button>
      </div>
    </div>
  );
}

/* ── Goal Review ── */
export function GoalReviewScreen() {
  const { navigate, goBack, selectedGoalCat, goalForm, createGoal } = useApp();
  const cat = GOAL_CATEGORIES.find((c) => c.id === selectedGoalCat);

  return (
    <div className="absolute inset-0 bg-white flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <div className="flex-1">
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>Review Target</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>Langkah 3 dari 3</p>
        </div>
      </div>

      <div className="mx-5 h-1.5 bg-[#3A5ED7] rounded-full mb-6" />

      <div className="px-5 flex-1 overflow-y-auto">
        {/* Goal card preview */}
        <div className="bg-gradient-to-br from-[#304EB3] to-[#4CA9D5] rounded-3xl p-5 mb-5 text-center">
          <span className="text-4xl">{cat?.icon}</span>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 20, color: "white" }} className="mt-2">{goalForm.name}</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 24, color: "white" }} className="mt-1">
            {goalForm.amount ? formatRp(parseInt(goalForm.amount)) : "Rp0"}
          </p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>Target selesai: {goalForm.deadline || "-"}</p>
        </div>

        {/* Details */}
        <div className="space-y-3">
          {[
            { label: "Kategori", value: cat?.label || "-" },
            { label: "Nama Target", value: goalForm.name || "-" },
            { label: "Total Target", value: goalForm.amount ? formatRp(parseInt(goalForm.amount)) : "Rp0" },
            { label: "Deadline", value: goalForm.deadline || "-" },
            { label: "Cicilan/bulan", value: goalForm.amount ? formatRp(Math.round(parseInt(goalForm.amount) / 12)) : "Rp0" },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-center py-3 border-b border-[#F1F2F4]">
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#8C9AA6" }}>{row.label}</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-4">
        <button
          onClick={createGoal}
          className="w-full py-4 rounded-2xl bg-[#3A5ED7] active:scale-95 transition-transform"
        >
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Mulai Target 🚀</span>
        </button>
      </div>
    </div>
  );
}

/* ── Goal Detail ── */
export function GoalDetailScreen() {
  const { goBack, goals, selectedGoalId, addGoalContribution } = useApp();
  const [showContrib, setShowContrib] = useState(false);
  const [amount, setAmount] = useState("");

  const goal = goals.find((g) => g.id === selectedGoalId);
  if (!goal) return null;

  const pct = Math.round((goal.current / goal.target) * 100);

  return (
    <div className="absolute inset-0 bg-[#F6F6F9] flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex items-center gap-4 px-5 pt-14 pb-4 bg-white">
        <button onClick={goBack}><ChevronLeft size={24} color="#2A353E" /></button>
        <p className="flex-1 text-center" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }}>
          Detail Target
        </p>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Goal header */}
        <div className="bg-gradient-to-br from-[#304EB3] to-[#4CA9D5] mx-4 mt-4 rounded-3xl p-5 text-center">
          <span className="text-4xl">{goal.icon}</span>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "white" }} className="mt-2">{goal.name}</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 26, color: "white" }} className="mt-1">
            {formatRp(goal.current)}
          </p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>dari {formatRp(goal.target)}</p>

          <div className="mt-3 w-full h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all" style={{ width: `${Math.min(pct, 100)}%` }} />
          </div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.9)" }} className="mt-1">
            {pct}% tercapai
          </p>

          {goal.achieved && (
            <div className="mt-3 bg-[#1FD64A] rounded-full px-4 py-1.5 inline-flex items-center gap-1">
              <span className="text-lg">🏆</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: "white" }}>Target Tercapai!</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mx-4 mt-4 bg-white rounded-2xl p-4" style={{ border: "1px solid #EFF1F6" }}>
          {[
            { label: "Target", value: formatRp(goal.target) },
            { label: "Terkumpul", value: formatRp(goal.current) },
            { label: "Sisa", value: formatRp(Math.max(0, goal.target - goal.current)) },
            { label: "Deadline", value: goal.deadline },
          ].map((row) => (
            <div key={row.label} className="flex justify-between py-2.5 border-b border-[#F1F2F4] last:border-0">
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#8C9AA6" }}>{row.label}</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {!goal.achieved && (
        <div className="px-4 pb-6 pt-2">
          <button
            onClick={() => setShowContrib(true)}
            className="w-full py-4 rounded-2xl bg-[#3A5ED7] active:scale-95 transition-transform"
          >
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>+ Tambah Kontribusi</span>
          </button>
        </div>
      )}

      {/* Contribution overlay */}
      <AnimatePresence>
        {showContrib && (
          <>
            <motion.div className="absolute inset-0 z-30 bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContrib(false)} />
            <motion.div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-40 p-5" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.3 }}>
              <div className="flex justify-center mb-4"><div className="w-10 h-1 bg-[#CED4D9] rounded-full" /></div>
              <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A353E" }} className="mb-3">Tambah Kontribusi</p>
              <div className="flex items-center border-b-2 border-[#3A5ED7] pb-2 mb-4">
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 16 }}>Rp</span>
                <input type="number" className="flex-1 ml-2 outline-none text-xl font-bold bg-transparent" style={{ fontFamily: "'Quicksand', sans-serif", color: "#121212" }} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" autoFocus />
              </div>
              <div className="flex gap-2 flex-wrap mb-5">
                {[50000, 100000, 250000, 500000].map((a) => (
                  <button key={a} onClick={() => setAmount(a.toString())} className="px-3 py-1.5 rounded-full" style={{ border: "1px solid #D9DFF6" }}>
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13 }}>{formatRp(a)}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => { const amt = parseInt(amount); if (amt > 0) { addGoalContribution(goal.id, amt); setShowContrib(false); setAmount(""); } }} className="w-full py-4 rounded-2xl bg-[#3A5ED7]">
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Simpan</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}