import React from "react";
import { User, ChevronRight, LogOut } from "lucide-react";
import { StatusBar } from "../StatusBar";
import { BottomNav } from "../BottomNav";

export function ProfilScreen() {
  const menuItems = [
    { icon: "👤", label: "Informasi Akun", desc: "Kelola data akun kamu" },
    { icon: "🔔", label: "Notifikasi", desc: "Pengaturan notifikasi" },
    { icon: "🔒", label: "Keamanan", desc: "Password dan keamanan" },
    { icon: "❓", label: "Bantuan", desc: "FAQ dan hubungi kami" },
    { icon: "📋", label: "Syarat & Ketentuan", desc: "Kebijakan privasi" },
  ];

  return (
    <div className="absolute inset-0 bg-[#F6F6F9] flex flex-col overflow-hidden">
      <StatusBar />
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile header */}
        <div
          className="px-5 pt-14 pb-8 flex flex-col items-center gap-3"
          style={{ background: "linear-gradient(to bottom, #304EB3, #4CA9D5)" }}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <User size={40} color="white" />
          </div>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>Pittoy User</p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>pittoy@email.com</p>
        </div>

        {/* Menu */}
        <div className="px-4 mt-4 space-y-2">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="w-full bg-white rounded-2xl px-4 py-3 flex items-center gap-3 active:opacity-80"
              style={{ border: "1px solid #EFF1F6" }}
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1 text-left">
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#2A353E" }}>{item.label}</p>
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6" }}>{item.desc}</p>
              </div>
              <ChevronRight size={18} color="#8C9AA6" />
            </button>
          ))}

          <button
            className="w-full bg-white rounded-2xl px-4 py-3 flex items-center gap-3 active:opacity-80 mt-4"
            style={{ border: "1px solid #FFD4D4" }}
          >
            <LogOut size={20} color="#DF0000" />
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14, color: "#DF0000" }}>Keluar</p>
          </button>
        </div>

        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C9AA6", textAlign: "center" }} className="mt-6">
          Pittoy v1.0.0
        </p>
      </div>

      <BottomNav />
    </div>
  );
}