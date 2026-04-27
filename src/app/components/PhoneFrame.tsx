import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4">
      <div
        className="relative bg-white overflow-hidden shadow-2xl"
        style={{
          width: 390,
          height: 844,
          borderRadius: 44,
          boxShadow: "0 0 0 12px #222, 0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#222] z-50"
          style={{ width: 126, height: 34, borderRadius: "0 0 20px 20px" }}
        />
        {/* Screen content */}
        <div className="absolute inset-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
