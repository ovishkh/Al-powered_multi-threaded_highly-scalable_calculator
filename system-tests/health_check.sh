#!/bin/bash

# System Health Check Script for OvCompute
# This script verifies that all required infrastructure and services are responsive.

echo "==========================================="
echo "   OvCompute System Status Check"
echo "==========================================="

check_service() {
    SERVICE_NAME=$1
    HOST=$2
    PORT=$3

    # Using nc (netcat) to check if the port is open
    if nc -z -w 2 $HOST $PORT 2>/dev/null; then
        echo "✅ [UP] $SERVICE_NAME is reachable on $HOST:$PORT"
    else
        echo "❌ [DOWN] $SERVICE_NAME is NOT reachable on $HOST:$PORT"
    fi
}

check_http() {
    SERVICE_NAME=$1
    URL=$2

    # Using curl to check HTTP status
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
    if [ "$STATUS" == "200" ] || [ "$STATUS" == "404" ] || [ "$STATUS" == "401" ] || [ "$STATUS" == "403" ]; then
        echo "✅ [UP] $SERVICE_NAME responded with HTTP $STATUS at $URL"
    else
        echo "❌ [DOWN] $SERVICE_NAME is NOT reachable at $URL (Status: $STATUS)"
    fi
}

echo -e "\n--- Infrastructure ---"
check_service "PostgreSQL" "localhost" "5432"
check_service "Redis" "localhost" "6379"
check_service "RabbitMQ" "localhost" "5672"
check_service "RabbitMQ UI" "localhost" "15672"

echo -e "\n--- Microservices ---"
check_http "Frontend (Next.js)" "http://localhost:3000"
check_http "API Gateway (NestJS)" "http://localhost:3001/health"
check_http "Calculation Engine (Go)" "http://localhost:8080/health"
check_http "AI Service (Python)" "http://localhost:8000/health"

echo -e "\nHealth check complete!"
