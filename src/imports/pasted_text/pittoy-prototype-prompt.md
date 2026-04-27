# Pittoy — Figma Make Prototype Prompt
# End-to-End: Home → Catatan → Budget → Goals → Evaluasi

---

## 🎯 CONTEXT

**App:** Pittoy — personal finance app, Indonesia mass market
**Goal:** Build a fully connected interactive prototype using the Figma frames already provided for each screen.
**Do not recreate visual design** — use the existing frames as-is. Only wire up interactions, overlays, transitions, and state logic between frames.

---

## 🔄 INTERACTION FLOWS

Connect all frames according to these flows. Each `→` is a prototype connection.

### Home (Beranda)
```
[Catat Keuangan card]     → Catatan Keuangan Dashboard
[Target Keuangan card]    → Financial Goals Dashboard
[Evaluasi banner]         → Evaluasi Summary Screen
[Catatan Keuangan CTA]    → Catatan Keuangan Dashboard
[Financial Goals CTA]     → Financial Goals Dashboard
[Bottom nav: Beranda]     → Home (self)
[Bottom nav: Catat]       → Catatan Keuangan Dashboard
[Bottom nav: Profil]      → Profil (placeholder)
```

### Catatan Keuangan Dashboard
```
[+ Catatan FAB]           → Catat Keuangan Form (overlay, slide up)
[Month tab: Mar]          → Catatan - March state
[Month tab: Apr]          → Catatan - April state (default)
[Month tab: Mei]          → Catatan - May state (empty or placeholder)
[Transaction row tap]     → Transaction Detail screen
[Filter: Semua]           → show all transactions
[Filter: Pengeluaran]     → filtered expense view
[Filter: Pemasukan]       → filtered income view
[Filter: 🎯 Ke goal]      → filtered goal transfers (only if goal active)
[← back]                  → Home
```

### Catat Keuangan Form (bottom sheet overlay)
```
[Toggle: Pengeluaran]     → show expense form state
[Toggle: Pemasukan]       → show income form state
[Category tap]            → selected state (highlight)
[Simpan]                  → close overlay → Catatan Dashboard (updated)
[drag down / backdrop]    → dismiss overlay
```

### Budget — Setup
```
[Atur Budget entry point] → Budget Setup Step 1
[Selanjutnya (step 1)]    → Budget Setup Step 2 (disabled if amount = 0)
[Simpan Budget (step 2)]  → Budget Dashboard + success toast
[← back (step 2)]        → Budget Setup Step 1
```

### Budget Dashboard
```
[Catat Keuangan +]        → Catat Keuangan Form (overlay)
[Category: Makan]         → Budget Category Detail (Makan)
[Category: Transportasi]  → Budget Category Detail (Transportasi)
[Tambah Kategori]         → Add category flow
[← back]                 → Home
```

### Budget Category Detail
```
[← back]                 → Budget Dashboard
[✏️ edit budget amount]   → inline edit state
```

### Financial Goals — Setup
```
[Buat Target Baru]        → Goal Step 1 (category picker)
[Category select]         → highlight selected, enable Selanjutnya
[Selanjutnya (step 1)]    → Goal Step 2 (detail form)
[Selanjutnya (step 2)]    → Goal Review screen
[Mulai Target]            → Goals Dashboard + success state
[← back (step 2)]        → Goal Step 1
[← back (review)]        → Goal Step 2
```

### Goals Dashboard
```
[Goal item tap]           → Goal Detail screen
[+ contribution button]   → Add contribution overlay
[Buat Target Finansial Baru] → Goal Step 1
[← back]                 → Home
```

### Evaluasi
```
[Evaluasi banner on Home] → Evaluasi Summary
[Reflection chip select]  → chip active state (toggle)
[Atur budget bulan depan] → Budget Setup Step 1 (pre-filled variant)
[Lihat Laporan]           → Financial Report screen
[← back]                 → Home
```

### Financial Report
```
[Bagikan ↗]              → Share sheet (native overlay)
[← back]                 → Evaluasi Summary
```

---

## 📲 USER STATE FRAMES

Wire these as separate starting points / conditional flows:

```
STATE: First User
  - Catatan frame: empty state variant (mascot + empty)
  - Budget frame: setup CTA (not dashboard)
  - Goals frame: create first goal CTA

STATE: Budget Only (has budget, no goal)
  - Catatan frame: summary cards show budget %, no goal row
  - Filter chips: no "Ke goal" chip

STATE: Full Integration (budget + goal active)
  - Catatan frame: both budget % and goal row visible
  - Filter chips: includes "Ke goal"
  - Transaction rows: show Budget / Goal tags

STATE: Overspend
  - Catatan frame: expense card red variant
  - Insight card: warning tone variant

EDGE: Empty month selected
  - Catatan frame: both cards Rp0, empty list
  
EDGE: Goal achieved
  - Goals frame: celebration / confetti state
```

---

## 🎭 TRANSITIONS

```
Screen to screen:          Smart animate, 250ms, ease out
Bottom sheet open:         Slide up, 300ms, ease out
Bottom sheet close:        Slide down, 250ms, ease in
Overlay / modal:           Dissolve, 200ms
Toast notification:        Slide down from top, auto-dismiss 3s
Chip / tab state change:   Instant (component interaction)
```

---

## 📐 PROTOTYPE SETTINGS

```
Device:         iPhone 14 (390 × 844)
Orientation:    Portrait
Starting frame: Home (Beranda)
Flow name:      Pittoy — Full Flow
```

---

*Frames already designed. This prompt is for wiring interactions only.*