# Tenpo Challenge

Aplicación para gestionar transacciones, compuesta por un backend en Spring Boot y un frontend en React.

## Stack

### Backend
- Java 17
- Spring Boot
- Maven
- Spring Data JPA
- PostgreSQL

### Frontend
- React
- Vite

## Requisitos

Para ejecución local:
- Java 17
- Maven
- Node.js
- PostgreSQL

Para ejecución con Docker:
- Docker Desktop
- Docker Compose

## Configuración local

### Base de datos
Crear una base de datos PostgreSQL llamada:

```sql
tenpo_challenge
```

Credenciales usadas en ambiente local:

- usuario: `postgres`
- password: `postgres`

### Backend

El backend usa la siguiente configuración local en `application.yaml`:

- URL: `jdbc:postgresql://localhost:5432/tenpo_challenge`
- usuario: `postgres`
- password: `postgres`

Para ejecutar:

```bash
cd backend
mvn spring-boot:run
```

El backend queda disponible en:

```text
http://localhost:8080/tenpo-challenge
```

Se puede interactuar con Swagger en:

```text
http://localhost:8080/tenpo-challenge/swagger-ui/index.html
```

### Frontend

El frontend usa la variable:

```env
VITE_API_URL=http://localhost:8080/tenpo-challenge/transaction
```

Para ejecutar:

```bash
cd frontend
npm install
npm run dev
```

El frontend queda disponible normalmente en:

```text
http://localhost:5173
```

## Ejecución con Docker

El proyecto puede dockerizarse agregando:

- `docker-compose.yml`
- `backend/Dockerfile`
- `frontend/Dockerfile`

Luego ejecutar desde la raíz del proyecto:

```bash
docker compose up --build
```

Puertos esperados:
- frontend: `http://localhost:3000`
- backend: `http://localhost:8080`

## Endpoints principales

Base URL:

```text
http://localhost:8080/tenpo-challenge
```

Ejemplo principal:

```text
POST /transaction
```

Según la implementación, este endpoint procesa la transacción y retorna el resultado correspondiente.

## Estructura general

```text
backend/
  src/
  pom.xml

frontend/
  src/
  package.json
```

## Decisiones técnicas

- Se usa Spring Boot para exponer la API REST.
- Se usa PostgreSQL como base de datos relacional.
- Se usa React + Vite para una interfaz rápida y simple.
- La dockerización se plantea como una capa adicional.
