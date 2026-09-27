# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY go.mod ./
# COPY go.sum ./
# RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o calc-engine ./cmd/server

# Final stage
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/calc-engine .

EXPOSE 8080
CMD ["./calc-engine"]
