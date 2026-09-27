<div align="center">
  <h1>🚀 OvCompute: AI-Powered Multi-Threaded Scalable Calculator</h1>
  <p>An enterprise-grade, highly scalable mathematical computation platform.</p>
</div>

---

## 📖 Overview

OvCompute bridges the gap between simple calculator apps and heavyweight computational software (like MATLAB or Mathematica). It provides a highly accessible, web-based, AI-driven calculator that can instantly scale to handle massive concurrent computational workloads.

## 🏗 Architecture

The platform uses a robust polyglot microservices architecture designed for extreme scale and performance:

- **🎨 Frontend (Next.js):** A premium, glassmorphic UI built with React, Tailwind CSS, Framer Motion, and Zustand state management.
- **🚪 API Gateway (NestJS):** Node.js gateway that handles authentication, caching (Redis), rate-limiting, and routes workloads to the async queues.
- **⚙️ Calculation Engine (Go):** A high-performance, multi-threaded worker that computes heavy algebraic and matrix operations utilizing Go routines.
- **🧠 AI/NLP Service (Python):** A FastAPI worker utilizing LLMs (e.g., GPT-4) to parse natural language math queries into Abstract Syntax Trees (AST).
- **🛤 Async Message Queue (RabbitMQ):** Message broker managing long-running computational jobs.
- **💾 Database (PostgreSQL):** Stores user profiles and persistent calculation history via Prisma ORM.

## 🗂 Project Structure

Here is a detailed breakdown of the repository structure and what each folder contains:

```
.
├── ai-service/        # Python FastAPI microservice for AI NLP
│   ├── app/           # Core application code (routers, models, services)
│   ├── venv/          # Python virtual environment
│   ├── requirements.txt # Python dependencies
│   └── Dockerfile     # Container definition
├── api-gateway/       # Node.js/NestJS entrypoint and SSE streaming
│   ├── src/           # NestJS source code (controllers, modules, services)
│   ├── prisma/        # Prisma ORM schema and migrations
│   ├── test/          # Unit and e2e testing files
│   ├── package.json   # Node.js dependencies
│   └── Dockerfile     # Container definition
├── calc-engine/       # Go service for raw, parallelized mathematics
│   ├── cmd/           # Application entrypoints (main.go)
│   ├── internal/      # Private application and library code
│   ├── pkg/           # Public library code
│   ├── go.mod         # Go module dependencies
│   └── Dockerfile     # Container definition
├── frontend/          # Next.js React application
│   ├── src/           # Next.js app router, components, and utilities
│   ├── public/        # Static assets
│   ├── package.json   # Node.js dependencies
│   └── Dockerfile     # Container definition
├── k8s/               # Kubernetes manifests and Auto-scaling configs
│   └── calc-engine-deployment.yaml # Deployment manifest for the calculator engine
├── docs/              # Core documentation
│   ├── PRD.md         # Product Requirements Document
│   ├── IMPLEMENTATION_PLAN.md # Step-by-step checklist and architecture map
│   ├── UI_IMPROVEMENT_PLAN.md # Technical roadmap for evolving the design system
│   └── CALCULATOR_MODES_PLAN.md # Planning document for different calculator modes
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
