<div align="center">
  <h1>🚀 OCompEngine: AI-Powered Multi-Threaded Scalable Calculator</h1>
  <p>An enterprise-grade, highly scalable mathematical computation platform.</p>
</div>

---

## 📖 Overview

OCompEngine bridges the gap between simple calculator apps and heavyweight computational software (like MATLAB or Mathematica). It provides a highly accessible, web-based, AI-driven calculator that can instantly scale to handle massive concurrent computational workloads.

## 🏗 Architecture

The platform uses a robust polyglot microservices architecture designed for extreme scale and performance:

- **🎨 Frontend (Next.js):** A premium, glassmorphic UI built with React, Tailwind CSS, Framer Motion, and Zustand state management.
- **🚪 API Gateway (NestJS):** Node.js gateway that handles authentication, caching (Redis), rate-limiting, and routes workloads to the async queues.
- **⚙️ Calculation Engine (Go):** A high-performance, multi-threaded worker that computes heavy algebraic and matrix operations utilizing Go routines.
- **🧠 AI/NLP Service (Python):** A FastAPI worker utilizing LLMs (e.g., GPT-4) to parse natural language math queries into Abstract Syntax Trees (AST).
- **🛤 Async Message Queue (RabbitMQ):** Message broker managing long-running computational jobs.
- **💾 Database (PostgreSQL):** Stores user profiles and persistent calculation history via Prisma ORM.

## 🗂 Project Structure & Documentation

Detailed project planning and specifications are securely managed in our `docs/` directory:
- [PRD.md](file:///Users/z/Documents/Code/Al-powered_multi-threaded_highly-scalable_calculator/docs/PRD.md): The overarching Product Requirements Document.
- [IMPLEMENTATION_PLAN.md](file:///Users/z/Documents/Code/Al-powered_multi-threaded_highly-scalable_calculator/docs/IMPLEMENTATION_PLAN.md): Step-by-step checklist and architecture map.
- [UI_IMPROVEMENT_PLAN.md](file:///Users/z/Documents/Code/Al-powered_multi-threaded_highly-scalable_calculator/docs/UI_IMPROVEMENT_PLAN.md): Technical roadmap for evolving the design system.

```
.
├── ai-service/        # Python FastAPI microservice for AI NLP
├── api-gateway/       # Node.js/NestJS entrypoint and SSE streaming
├── calc-engine/       # Go service for raw, parallelized mathematics
├── frontend/          # Next.js React application
├── k8s/               # Kubernetes manifests and Auto-scaling configs
├── docs/              # Core documentation (PRD, Plans)
└── docker-compose.yml # Local infrastructure (DB, Cache, Queue)
```

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js (v18+)](https://nodejs.org/)
- [Go (v1.21+)](https://golang.org/)
- [Python (3.10+)](https://www.python.org/)
- [Docker & Docker Compose](https://www.docker.com/)

### 2. Run Local Infrastructure
To start PostgreSQL, Redis, and RabbitMQ, use the provided Makefile:
```bash
make infra-up
```

### 3. Start Frontend Development Server
```bash
cd frontend
npm install
npm run dev
```
Navigate to `http://localhost:3000` to view the UI.

### 4. CI/CD & Deployment
This project is configured with GitHub Actions (`.github/workflows/ci.yml`) to automatically test and build Docker containers. Production deployments are managed via Kubernetes manifests located in the `/k8s` directory, featuring Horizontal Pod Autoscaling (HPA) for the Calculation Engine.
