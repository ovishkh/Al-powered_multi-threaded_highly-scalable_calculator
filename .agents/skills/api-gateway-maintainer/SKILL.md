---
name: api-gateway-maintainer
description: Maintain and generate features for the OvCompute NestJS API Gateway
---

# API Gateway Maintainer Skill

Use this skill when working on the `api-gateway/` microservice.

## Tech Stack
- Framework: NestJS (Node.js/TypeScript)
- ORM: Prisma (PostgreSQL)
- Caching: Redis
- Messaging: RabbitMQ

## Rules
1. **Modules:** Follow NestJS modular architecture. Group related controllers, services, and modules together.
2. **Authentication:** Ensure endpoints are properly secured.
3. **Rate Limiting:** Maintain rate limiting logic to prevent abuse.
4. **Message Queuing:** When integrating with the Calc Engine or AI Service, use RabbitMQ for asynchronous communication rather than direct HTTP calls where appropriate.
5. **Database:** Use Prisma for all database interactions. Keep schemas updated in `prisma/schema.prisma`.

## Common Tasks
- Exposing new REST or SSE endpoints for the frontend.
- Adding a new database model via Prisma.
- Integrating a new RabbitMQ queue or event.
