---
name: calc-engine-maintainer
description: Maintain and generate features for the OvCompute Go Calculation Engine
---

# Calculation Engine Maintainer Skill

Use this skill when working on the `calc-engine/` microservice.

## Tech Stack
- Language: Go (1.21+)
- Messaging: RabbitMQ (AMQP)

## Rules
1. **Concurrency:** Utilize Goroutines and Channels for high-performance, parallelized mathematical computations.
2. **Safety:** Ensure proper error handling and panic recovery for all computation tasks to prevent worker crashes.
3. **Structure:** Follow idiomatic Go project layout:
   - `cmd/`: Entrypoints.
   - `internal/`: Private application code.
   - `pkg/`: Public library code.
4. **Dependencies:** Keep dependencies minimal and use standard library math functions where possible.

## Common Tasks
- Adding a new mathematical function (e.g., matrix multiplication).
- Optimizing computation algorithms.
- Handling new message types from RabbitMQ.
