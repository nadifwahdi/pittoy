import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle } from "lucide-react";
import { useApp } from "./AppContext";

export function Toast() {
  const { toast } = useApp();
  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-12 left-4 right-4 z-50 flex items-center gap-3 bg-[#3A5ED7] text-white px-4 py-3 rounded-2xl shadow-lg"
        >
          <CheckCircle size={20} color="white" />
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14 }}>
            {toast.message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
