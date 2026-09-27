.PHONY: help infra-up infra-down setup build run

help:
	@echo "Available commands:"
	@echo "  make infra-up    - Start PostgreSQL, Redis, RabbitMQ via Docker Compose"
	@echo "  make infra-down  - Stop infrastructure containers"
	@echo "  make setup       - Install dependencies for all services"

infra-up:
	docker compose up -d

infra-down:
	docker compose down
