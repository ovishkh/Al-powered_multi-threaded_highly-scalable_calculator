---
name: frontend-maintainer
description: Maintain and generate components for the OvCompute Next.js frontend
---

# Frontend Maintainer Skill

Use this skill when modifying, maintaining, or generating new features for the `frontend/` microservice.

## Tech Stack
- Framework: Next.js (React)
- Styling: Tailwind CSS, Framer Motion for animations
- State Management: Zustand
- HTTP Client: Fetch / Axios

## Rules
1. **Design System:** All UI components must adhere to the premium, glassmorphic aesthetic defined in `docs/UI_IMPROVEMENT_PLAN.md`.
2. **Components:** Build reusable components in `src/components`. Ensure responsive design.
3. **State:** Use Zustand for global state management (e.g., in `src/store`). Avoid excessive local state for data that needs to be shared.
4. **Routing:** Follow Next.js App Router conventions.
5. **Testing:** Write unit tests for critical components.

## Common Tasks
- Adding a new UI component.
- Updating the styling of the calculator.
- Integrating with new endpoints from the API Gateway.
