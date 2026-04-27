import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhoneFrame } from "./components/PhoneFrame";
import { AppProvider, useApp } from "./components/AppContext";
import { Toast } from "./components/Toast";
import { HomeScreen } from "./components/screens/HomeScreen";
import { CatatanScreen } from "./components/screens/CatatanScreen";
import {
  BudgetEmptyStateScreen,
  BudgetIntroScreen,
  BudgetStep1Screen,
  BudgetStep2Screen,
  BudgetDashboardScreen,
  BudgetCategoryScreen,
} from "./components/screens/BudgetScreen";
import {
  GoalsDashboardScreen,
  GoalStep1Screen,
  GoalStep2Screen,
  GoalReviewScreen,
  GoalDetailScreen,
} from "./components/screens/GoalsScreen";
import { EvaluasiScreen, FinancialReportScreen } from "./components/screens/EvaluasiScreen";
import { ProfilScreen } from "./components/screens/ProfilScreen";
import { CatatFormSheet } from "./components/overlays/CatatFormSheet";

const screenTransition = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-30%", opacity: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

function AppContent() {
  const { screen } = useApp();

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen />;
      case "catatan": return <CatatanScreen />;
      case "budget-empty": return <BudgetEmptyStateScreen />;
      case "budget-intro": return <BudgetIntroScreen />;
      case "budget-step1": return <BudgetStep1Screen />;
      case "budget-step2": return <BudgetStep2Screen />;
      case "budget-dashboard": return <BudgetDashboardScreen />;
      case "budget-category": return <BudgetCategoryScreen />;
      case "goals-dashboard": return <GoalsDashboardScreen />;
      case "goal-step1": return <GoalStep1Screen />;
      case "goal-step2": return <GoalStep2Screen />;
      case "goal-review": return <GoalReviewScreen />;
      case "goal-detail": return <GoalDetailScreen />;
      case "evaluasi": return <EvaluasiScreen />;
      case "report": return <FinancialReportScreen />;
      case "profil": return <ProfilScreen />;
      default: return <HomeScreen />;
    }
  };

  // Determine transition type
  const isOverlay = ["budget-step1","budget-step2","goal-step1","goal-step2","goal-review"].includes(screen);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          className="absolute inset-0"
          initial={screenTransition.initial}
          animate={screenTransition.animate}
          exit={screenTransition.exit}
          transition={screenTransition.transition}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom sheet overlay for Catat form */}
      <CatatFormSheet />

      {/* Toast notifications */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PhoneFrame>
        <AppContent />
      </PhoneFrame>
    </AppProvider>
  );
}
