# Calculator Modes Expansion Plan

**Project Name:** OvCompute
**Document Version:** 1.0

## 1. Executive Summary
As OvCompute grows into an enterprise-grade platform, different user personas (scientists, developers, financial analysts, and casual users) require specialized computation interfaces and tools. This plan details the architecture and UI/UX roadmap for introducing multiple targeted "Calculator Modes."

## 2. Proposed Calculator Types

### 2.1. Scientific Calculator (The Researcher)
**Target Audience:** Scientists, Physics/Math Students, Engineers.
- **Key Features:**
  - Advanced trigonometry (sin, cos, tan, arcsin, hyperbolic functions).
  - Logarithmic and exponential functions (ln, log10, e^x).
  - Complex number support.
  - Constants library (c, G, h, Na, etc.).
- **UI Paradigm:** High-density grid with secondary function keys (Shift/Alpha toggle), similar to classic Casio/Texas Instruments layouts but modernized.

### 2.2. Comic Calculator (The Entertainer)
**Target Audience:** Casual users, children, Easter egg hunters.
- **Key Features:**
  - Gamified interactions.
  - Results returned with comic-style popups (e.g., "BAM!", "POW!").
  - Sound effects on key presses.
  - Sassy or humorous AI explanations (e.g., "2+2 is 4, even a toddler knows that!").
- **UI Paradigm:** Bold colors, Comic Sans (or similar) typography, thick black borders (comic-book style), dynamic CSS animations.

### 2.3. Programmer / Developer Calculator
**Target Audience:** Software Engineers, Computer Science Students.
- **Key Features:**
  - Base conversions (Binary, Octal, Decimal, Hexadecimal) visible simultaneously.
  - Bitwise operations (AND, OR, XOR, NOT, NAND, NOR).
  - Bit shifting (Left shift, Right shift).
  - Byte/Word/DWord/QWord toggles.
- **UI Paradigm:** Terminal-like aesthetic (green on black), monospaced fonts, explicit visual bit toggles (64-bit interactive UI).

### 2.4. Financial & Business Calculator
**Target Audience:** Accountants, Financial Analysts, Traders.
- **Key Features:**
  - Time Value of Money (TVM) functions.
  - NPV (Net Present Value), IRR (Internal Rate of Return).
  - Real-time currency conversions via API.
  - Amortization schedules.
- **UI Paradigm:** Spreadsheet-like grids, data visualization (charts) for amortization/growth over time.

### 2.5. Graphing & Matrix Calculator
**Target Audience:** Mathematicians, Data Scientists.
- **Key Features:**
  - 2D and 3D function plotting (Canvas/WebGL).
  - Matrix creation, multiplication, determinants, inverses.
  - Intersections and asymptotes calculation.
- **UI Paradigm:** Split-screen (equation input on the left, interactive graph on the right).

### 2.6. Health & Fitness Calculator
**Target Audience:** Fitness enthusiasts, Dietitians.
- **Key Features:**
  - BMI (Body Mass Index) and BMR (Basal Metabolic Rate).
  - TDEE (Total Daily Energy Expenditure).
  - Macronutrient split calculations.
- **UI Paradigm:** Form-based inputs with sliders for height, weight, and activity level. Visual rings for macros.

## 3. Architecture & Implementation Plan

### 3.1. Frontend State Management
- Utilize `Zustand` to manage the `currentMode` state globally.
- Lazy-load calculator components based on the active mode to keep the initial bundle size small (Next.js `next/dynamic`).

### 3.2. Backend / Calculation Engine Support
- **Scientific/Matrix/Programmer:** These require the Go Calculation Engine to expand its AST (Abstract Syntax Tree) to handle bitwise operators, complex numbers, and matrices.
- **Financial/Health:** Can mostly be handled via simple formulas on the client or lightweight Gateway endpoints.
- **AI Integration:** The Python FastAPI NLP service must be made context-aware. If the user is in "Financial Mode," the AI should interpret "growth" financially rather than biologically.

### 3.3. Phase Rollout
- **Phase 1:** Scientific & Programmer modes (Highest utility for our current tech-savvy demographic).
- **Phase 2:** Graphing & Matrix (Leverages the multi-threaded Go backend).
- **Phase 3:** Financial & Health (Broadens the audience).
- **Phase 4:** Comic mode (Marketing push / viral feature).

## 4. Next Steps
1. Approve the modes for Phase 1.
2. Design Figma mockups for the Scientific and Programmer interfaces.
3. Update the Go engine's parser to support base-N numbers and bitwise operators.
