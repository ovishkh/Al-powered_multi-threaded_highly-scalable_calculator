---
name: ai-service-maintainer
description: Maintain and generate features for the OvCompute Python AI Service
---

# AI Service Maintainer Skill

Use this skill when working on the `ai-service/` microservice.

## Tech Stack
- Language: Python (3.10+)
- Framework: FastAPI
- LLM Integration: OpenAI, Anthropic, or similar APIs.
- Messaging: RabbitMQ

## Rules
1. **API Contracts:** Use Pydantic models for strict data validation on incoming requests and outgoing responses.
2. **Prompts:** Keep LLM prompts isolated from business logic. Consider versioning complex prompts.
3. **Error Handling:** Implement resilient error handling for LLM API timeouts or malformed responses.
4. **Dependencies:** Manage dependencies in `requirements.txt`.

## Common Tasks
- Updating the prompt used to parse natural language math queries.
- Adding a new endpoint for AI-assisted calculations.
- Integrating a new language model provider.
