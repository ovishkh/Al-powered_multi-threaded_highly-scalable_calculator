---
name: infra-maintainer
description: Maintain and manage infrastructure, Kubernetes, and Docker for OvCompute
---

# Infrastructure Maintainer Skill

Use this skill when modifying the deployment, containerization, or infrastructure configuration of the OvCompute platform.

## Tech Stack
- Containerization: Docker, Docker Compose
- Orchestration: Kubernetes (K8s)
- Infrastructure components: PostgreSQL, Redis, RabbitMQ

## Rules
1. **Container Images:** Ensure Dockerfiles use multi-stage builds to keep final image sizes small and secure.
2. **Kubernetes:** Keep manifests in the `k8s/` directory up-to-date. Ensure proper resource requests/limits and autoscaling (HPA) configurations are present.
3. **Local Dev:** Ensure `docker-compose.yml` accurately reflects the services needed for local development.

## Common Tasks
- Updating environment variable configurations across deployments.
- Adding a new service to `docker-compose.yml`.
- Modifying Kubernetes deployment or service definitions.
