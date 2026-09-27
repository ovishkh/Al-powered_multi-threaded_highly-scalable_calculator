# UI/UX Aesthetic Overhaul Plan
*Objective: Transition from a generic "AI-generated" glassmorphic look to a highly professional, enterprise-grade, industrial web application aesthetic.*

## 1. Typography 📝
- **Current State**: System defaults, disjointed sizing.
- **Action Plan**:
  - Integrate a premium technical font. **Primary Font:** `Inter` (or `Geist Mono` for calculation inputs).
  - Use stark weight contrasts (e.g., `font-light` for secondary text, `font-bold` for prominent numbers/results).
  - Remove overly wide tracking and limit line-height for a denser, more dashboard-like feel.

## 2. Color Palette & Theme 🎨
- **Current State**: Neon mesh gradients (blues, purples, pinks) over a blurred void. Often looks like a generic ChatGPT wrapper.
- **Action Plan**:
  - Switch to an **Industrial Dark Mode**.
  - **Background**: Pure Black `#000000` or extremely dark gray `#0A0A0A`.
  - **Surfaces**: Solid `#111111` or `#1A1A1A` with a subtle 1px border (`#2A2A2A`). Drop heavy background blur (`backdrop-filter`) entirely.
  - **Accent Color**: Use a single, sharp accent color to draw attention, like **Electric Blue** (`#0070F3`) or **Monochrome High-Contrast** (White `#FFFFFF` on Black).

## 3. Layout & Structure 📐
- **Current State**: Floating, rounded rectangles centered on the screen.
- **Action Plan**:
  - Implement a rigorous **Grid System**. Panels should be anchored to the edges of the viewport or constrained within a strict max-width dashboard container.
  - Remove excessive border-radius. Change `rounded-3xl` (24px) to `rounded-lg` (8px) or even `rounded-none` for a sharper, more technical appearance.
  - Introduce an app shell with a clear sidebar or top navigation bar containing branding (OCompEngine).

## 4. Components 🧩
- **Calculator Keypad**:
  - Flatten the buttons. Remove gradients and shadows.
  - Use subtle hover states (e.g., background shifts from `#1A1A1A` to `#2A2A2A`).
- **AI Prompt Input**:
  - Make it look like a professional CLI or search bar rather than a chat bubble.
  - Prefix with a stark icon (e.g., a chevron `>` or a spark `✦`).
- **History Console**:
  - Format history as a dense data table or a terminal-like log rather than floating cards.
  - Use monospace fonts for math outputs to emphasize precision.

## 5. Micro-interactions ✨
- Keep animations extremely fast and utilitarian (duration 150ms max). Ease-out curves.
- Focus on snappy visual feedback rather than slow, bouncy transitions.
