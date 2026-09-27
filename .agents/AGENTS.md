# OvCompute Agent Rules

This workspace represents the OvCompute project, an AI-Powered Multi-Threaded Scalable Calculator.

## Architecture Context
- **Frontend (Next.js):** A premium, glassmorphic UI built with React, Tailwind CSS, Framer Motion, and Zustand state management.
- **API Gateway (NestJS):** Node.js gateway that handles authentication, caching (Redis), rate-limiting, and routes workloads to the async queues.
- **Calculation Engine (Go):** A high-performance, multi-threaded worker that computes heavy algebraic and matrix operations utilizing Go routines.
- **AI/NLP Service (Python):** A FastAPI worker utilizing LLMs to parse natural language math queries into Abstract Syntax Trees (AST).
- **Infrastructure:** Async Message Queue (RabbitMQ) for jobs, PostgreSQL (Prisma) for storage, Kubernetes for deployments, and Docker Compose for local dev.

## General Rules
1. **Microservice Boundaries:** When modifying code, ensure you are respecting the boundaries of the respective microservice. Do not mix dependencies across boundaries.
2. **Polyglot Consistency:** Follow idiomatic styles for each language:
   - TypeScript/React for Frontend.
   - TypeScript/NestJS for API Gateway.
   - Go for Calc Engine.
   - Python for AI Service.
3. **Documentation:** Always refer to the `docs/` directory for the PRD, Implementation Plan, and UI Improvement Plan before proposing architectural changes.
4. **Skills:** Utilize the available workspace skills to maintain the different parts of the system effectively.
