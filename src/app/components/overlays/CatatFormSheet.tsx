import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import { useApp, TxType, Month } from "../AppContext";

const CATEGORIES = [
  { id: "makan", label: "Makan", icon: "🍽️" },
  { id: "transportasi", label: "Transportasi", icon: "🚗" },
  { id: "belanja", label: "Belanja", icon: "🛍️" },
  { id: "hiburan", label: "Hiburan", icon: "🎬" },
  { id: "kesehatan", label: "Kesehatan", icon: "💊" },
  { id: "listrik", label: "Listrik / Air", icon: "💡" },
  { id: "gaji", label: "Gaji", icon: "💰" },
  { id: "bonus", label: "Bonus", icon: "🎁" },
];

const QUICK_AMOUNTS = ["10.000", "15.000", "20.000", "40.000", "100.000", "500.000"];

const MONTHS_OPTS: Month[] = ["Feb", "Mar", "Apr", "Mei"];

function formatRp(raw: string) {
  const n = parseInt(raw.replace(/\D/g, "") || "0");
  return n === 0 ? "0" : n.toLocaleString("id-ID");
}

export function CatatFormSheet() {
  const { showCatatForm, catatType, setCatatType, closeCatatForm, saveTransaction, selectedMonth } = useApp();

  const [amount, setAmount] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [desc, setDesc] = useState("");
  const [txDate, setTxDate] = useState("Senin, 2 Mar 2026 (kemarin)");
  const [txMonth, setTxMonth] = useState<Month>(selectedMonth);

  const incomeCats = CATEGORIES.filter((c) => ["gaji", "bonus"].includes(c.id));
  const expenseCats = CATEGORIES.filter((c) => !["gaji", "bonus"].includes(c.id));
  const cats = catatType === "Pemasukan" ? incomeCats : expenseCats;

  const handleSave = () => {
    if (!amount || !selectedCat) return;
    const catLabel = CATEGORIES.find((c) => c.id === selectedCat)?.label || selectedCat;
    saveTransaction({
      type: catatType,
      category: catLabel,
      desc: desc || catLabel,
      amount: parseInt(amount.replace(/\D/g, "") || "0"),
      date: "16 Apr 2026",
      month: "Apr",
      budgetTag: catatType === "Pengeluaran",
    });
    setAmount("");
    setSelectedCat("");
    setDesc("");
  };

  const handleQuickAmount = (v: string) => {
    setAmount(v.replace(/\./g, ""));
  };

  return (
    <AnimatePresence>
      {showCatatForm && (
        <>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 z-30"
            style={{ background: "rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCatatForm}
          />

          {/* Bottom sheet */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white z-40 flex flex-col"
            style={{ borderRadius: "20px 20px 0 0", maxHeight: "92%" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-[rgba(11,11,11,0.2)] rounded-full" />
            </div>

            {/* Close button */}
            <div className="flex justify-end px-5 pb-2">
              <button onClick={closeCatatForm}>
                <X size={22} color="#8C9AA6" />
              </button>
            </div>

            {/* Toggle type */}
            <div className="flex gap-2 mx-4 mb-4 p-1 bg-[#F1F2F4] rounded-full">
              {(["Pengeluaran", "Pemasukan"] as TxType[]).map((t) => (
                <button
                  key={t}
                  className="flex-1 py-2 rounded-full transition-all"
                  style={{
                    background: catatType === t ? (t === "Pengeluaran" ? "#EAF0FF" : "white") : "transparent",
                    border: catatType === t ? "1px solid #3A5ED7" : "none",
                  }}
                  onClick={() => { setCatatType(t); setSelectedCat(""); }}
                >
                  <span style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: catatType === t ? "#3A5ED7" : "#2A353E",
                  }}>
                    {t === "Pengeluaran" ? "− Pengeluaran" : "+ Pemasukan"}
                  </span>
                </button>
              ))}
            </div>

            <div className="overflow-y-auto flex-1 pb-4">
              {/* Amount */}
              <div className="px-4 mb-4">
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#1F2C37" }} className="mb-1">Nominal</p>
                <div className="flex items-center p-3 bg-white rounded-xl" style={{ border: "1px solid #D9DFF6" }}>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 14, color: "#2A353E", marginRight: 8 }}>Rp</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="0"
                    value={formatRp(amount)}
                    onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                    className="flex-1 outline-none bg-transparent"
                    style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 16, color: "#121212" }}
                  />
                </div>
              </div>

              {/* Quick amounts */}
              <div className="flex flex-wrap gap-2 px-4 mb-4 justify-center">
                {QUICK_AMOUNTS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickAmount(q)}
                    className="px-3 py-1.5 bg-white rounded-full"
                    style={{ border: "1px solid #D9DFF6" }}
                  >
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>{q}</span>
                  </button>
                ))}
              </div>

              {/* Category */}
              <div className="px-4 mb-4">
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#1F2C37" }} className="mb-2 text-center">Kategori</p>
                <div className="grid grid-cols-4 gap-2">
                  {cats.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCat(cat.id)}
                      className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all"
                      style={{
                        background: selectedCat === cat.id ? "#EAF0FF" : "white",
                        border: selectedCat === cat.id ? "1px solid #3A5ED7" : "1px solid #EFF1F6",
                      }}
                    >
                      <span className="text-xl">{cat.icon}</span>
                      <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 10, color: selectedCat === cat.id ? "#3A5ED7" : "#2A353E", fontWeight: 600 }}>
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="px-4 mb-4">
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#1F2C37" }} className="mb-1">Tanggal transaksi *</p>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl" style={{ border: "1px solid #D9DFF6" }}>
                  <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "#2A353E" }}>
                    Senin, 16 Apr 2026 (hari ini)
                  </span>
                  <ChevronDown size={16} color="#8C9AA6" />
                </div>
              </div>

              {/* Catatan input */}
              <div className="px-4 mb-4">
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, color: "#1F2C37" }} className="mb-1">Catatan</p>
                <input
                  type="text"
                  placeholder="Cth: makan siang di warteg"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full p-3 bg-white rounded-xl outline-none text-sm"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    border: "1px solid #D9DFF6",
                    color: "#2A353E",
                  }}
                />
              </div>
            </div>

            {/* Save button */}
            <div className="px-4 py-3 bg-white border-t border-[#EFF1F6]">
              <button
                onClick={handleSave}
                className="w-full py-4 rounded-2xl transition-all active:scale-95"
                style={{
                  background: amount && selectedCat ? "#3A5ED7" : "#CED4D9",
                  cursor: amount && selectedCat ? "pointer" : "not-allowed",
                }}
              >
                <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>
                  Simpan
                </span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
