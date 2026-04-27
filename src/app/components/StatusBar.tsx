import React from "react";
import { Wifi, Battery } from "lucide-react";

interface StatusBarProps {
  light?: boolean;
}

export function StatusBar({ light = false }: StatusBarProps) {
  const color = light ? "white" : "#2A353E";
  return (
    <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 z-10" style={{ paddingTop: 4 }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color }}>
        19:27
      </span>
      <div className="flex items-center gap-1">
        <Wifi size={14} color={color} />
        <Battery size={16} color={color} />
      </div>
    </div>
  );
}
