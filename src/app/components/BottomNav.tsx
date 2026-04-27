import React from "react";
import { useApp } from "./AppContext";

export function BottomNav() {
  const { screen, navigate, openCatatForm } = useApp();

  const isHome = screen === "home";
  const isProfil = screen === "profil";

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20"
      style={{ height: 91 }}
    >
      {/* Home indicator bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[17px] bg-[#FDFDFD] flex items-center justify-center">
        <div style={{ width: 134, height: 5, background: "#D4D8E2", borderRadius: 100 }} />
      </div>

      {/* Tab bar */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between px-8 pt-2 pb-3"
        style={{
          bottom: 17,
          background: "#FDFDFD",
          borderTop: "1px solid #F1F2F4",
          borderRadius: "16px 16px 0 0",
          boxShadow: "0 -1px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Beranda */}
        <button
          onClick={() => navigate("home")}
          className="flex flex-col items-center gap-1"
          style={{ minWidth: 60 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M5 13.5L16 4L27 13.5V27C27 27.55 26.55 28 26 28H20V21H12V28H6C5.45 28 5 27.55 5 27V13.5Z"
              fill={isHome ? "#3A5FD6" : "none"}
              stroke={isHome ? "#3A5FD6" : "#8C9AA6"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: isHome ? 600 : 400,
            fontSize: 12,
            color: isHome ? "#2A353E" : "#8C9AA6",
          }}>Beranda</span>
        </button>

        {/* Center: Catat Keuangan */}
        <button
          onClick={openCatatForm}
          className="flex flex-col items-center gap-2 active:opacity-80"
          style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 12 }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: "#3A5FD6",
              borderRadius: "50%",
              border: "1px solid #F1F2F4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 8V28M8 18H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            color: "#3A5FD6",
          }}>Catat Keuangan</span>
        </button>

        {/* Profil */}
        <button
          onClick={() => navigate("profil")}
          className="flex flex-col items-center gap-1"
          style={{ minWidth: 60 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 16C18.76 16 21 13.76 21 11S18.76 6 16 6 11 8.24 11 11 13.24 16 16 16ZM16 18C12.67 18 6 19.67 6 23V25H26V23C26 19.67 19.33 18 16 18Z"
              fill={isProfil ? "#3A5FD6" : "#8C9AA6"}
            />
          </svg>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: isProfil ? 600 : 400,
            fontSize: 12,
            color: isProfil ? "#2A353E" : "#8C9AA6",
          }}>Profil</span>
        </button>
      </div>
    </div>
  );
}
