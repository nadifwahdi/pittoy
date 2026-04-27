# Pittoy - Personal Finance App Prototype

A modern personal finance management application for the Indonesian market, built with React and Tailwind CSS.

## 🎯 Features

### ✅ Implemented
- **Home Dashboard** - Overview with balance, budgeting, and goals
- **Catatan Keuangan** - Transaction logging with income/expense tracking
- **Monthly Budgeting** - Complete budget setup and tracking flow
  - Budget onboarding
  - Category allocation
  - Real-time progress monitoring
  - Budget vs actual spending
- **Financial Goals** - Goal setting and tracking
- **Interactive Prototype** - Full end-to-end flow

### 📱 Designed For
- **Device:** iPhone 14 (390×844)
- **Orientation:** Portrait
- **Framework:** React + Tailwind CSS v4
- **State Management:** React Context API
- **Animations:** Motion (Framer Motion)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

Output will be in `dist/` folder.

## 📐 Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main router
│   ├── components/
│   │   ├── AppContext.tsx      # Global state management
│   │   ├── BottomNav.tsx       # Bottom navigation
│   │   ├── PhoneFrame.tsx      # Mobile frame wrapper
│   │   ├── StatusBar.tsx       # iOS status bar
│   │   ├── Toast.tsx           # Toast notifications
│   │   ├── overlays/
│   │   │   └── CatatFormSheet.tsx  # Transaction form modal
│   │   └── screens/
│   │       ├── HomeScreen.tsx
│   │       ├── CatatanScreen.tsx
│   │       ├── BudgetScreen.tsx
│   │       ├── GoalsScreen.tsx
│   │       ├── EvaluasiScreen.tsx
│   │       └── ProfilScreen.tsx
│   └── styles/
│       ├── fonts.css
│       ├── index.css
│       └── tailwind.css
└── imports/                     # Figma imports (assets, SVGs)
```

## 🎨 Design System

- **Primary Color:** `#3A5ED7` (Blue)
- **Typography:** Quicksand (headings), Inter (body)
- **Icons:** Lucide React
- **Motion:** Smooth page transitions with Motion

## 🔒 Privacy

This is a **private repository**. Source code is confidential.

## 📄 License

Private - All Rights Reserved

## 👤 Author

Pittoy Development Team

---

**Note:** This is a prototype for stakeholder review and demonstration purposes.
