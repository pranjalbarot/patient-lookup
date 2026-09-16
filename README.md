###Requirements

###Install the following:

Make sure the following are installed:

Java 21 Maven Node.js 20+ npm PostgreSQL Git

Clone the Project git clone YOUR_GITHUB_REPOSITORY_URL cd patient-lookup
Database Setup
Open PostgreSQL / pgAdmin.

Create a database:

Verify the installations:

java -version mvn -version node -v npm -v psql --version Database Setup

Create Database
Open PostgreSQL or pgAdmin and create the database:

CREATE DATABASE patient_lookup; 2. Run Database Script

Open the database script:

Open:

database/database.sql

Run the SQLscript against the patient_lookup database.

The script creates the required tables and initial test data.

Backend Setup
Open a terminal and go to the backend folder:

cd backend

Backend Setup

Configure PostgreSQL
Open:

backend/src/main/resources/application.properties

Configure PostgreSQL:

Configure your local PostgreSQL credentials:

spring.datasource.url=jdbc:postgresql://localhost:5432/patient_lookup spring.datasource.username=YOUR_USERNAME spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update

Replace YOUR_USERNAME and YOUR_PASSWORD with the local PostgreSQL credentials.

JWT Configuration

Replace:

YOUR_USERNAME YOUR_PASSWORD

with your PostgreSQL username and password.

Configure JWT
The application requires a JWT secret.

Set the followingenvironment variable:

JWT_SECRET=your-secret-key IntelliJ IDEA

In IntelliJ:

Go to:

Run → Edit Configurations → Spring Boot Application→ Environment variables

Add:

Under Environment variables, add:

JWT_SECRET=your-secret-keyRun Backend

From the backend folder:

Do not commit the JWT secret to GitHub.

Run Backend
Open a terminal:

cd backend

Run:

mvn spring-boot:run

Backend URL:

http://localhost:8080 Swagger / OpenAPI

Swagger / OpenAPI
After starting the backend, open:

Once the backend is running, open:

http://localhost:8080/swagger-ui/index.html

Swagger can be used to view and testprovides documentation and testing for the REST API.

Frontend Setup
Frontend Setup

Open anothera new terminal.:

Go to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the frontendapplication:

npm run dev

The frontend normally runs at:

Frontend URL:

http://localhost:5173 API Configuration

Open the URL shown in the terminal.

API Configuration
The frontend communicates with the Spring Boot backend through Axios.

Check:

frontend/src/api/api.js

Make sure the backend URL is configured correctly:

Make sure the API URL points to:

baseURL: "http://localhost:8080"

Login
Example:

baseURL: "http://localhost:8080" Authentication

The application uses JWT-based authentication.

Login

Users log in through the frontend.

The backend:

Validates the username and password. Generates a JWT token. Returns the token to the frontend. The frontend stores the token. The token is sent with protected API requests. Authorization

The application supports role-based access.

Example:

USER ADMIN

Different roles can have different permissions for patient operations.

Application Features Authentication User login JWT authentication Role-based authorization Logout Patient Management View patients Search patients View patient details Create patient Update patient Delete patient API RESTful API JWT-secured endpoints Swagger / OpenAPI documentation Running the Application

The backend and frontend should run at the same time.

Terminal 1 — Backend cd backend mvn spring-boot:run Terminal 2 — Frontend cd frontend npm install npm run dev

Then open:

http://localhost:5173 Test Login

Use the test account provided in the database script.in:

database/database.sql

Example:

Username: testuser Password: password

Use the credentials from database.sql if they are different.

Run the Complete Application
Two terminals are required.

Terminal 1 - Backend cd backend mvn spring-boot:run Terminal 2 - Frontend cd frontend npm install npm run dev

Then open:

http://localhost:5173 Troubleshooting Backend does not connect to PostgreSQL

If the database script contains different credentials, use those credentials instead.

Troubleshooting PostgreSQL Connection Error

Check:

spring.datasource.url spring.datasource.username spring.datasource.password

Make sure PostgreSQL is running.

Frontend dDependencies are missingError

Run:

npm install

inside the frontend folder.

cd frontend npm install JWT Error

Verify that:

JWT_SECRET

is configured in the backend environment variables.

JWTPort eError

Make sure JWT_SECRET is configured in the Spring Boot environment variables.

Port already in use

Default ports:

Frontend: http://localhost:5173 Backend: http://localhost:8080

Make sure ports 8080 and 5173these ports are available.

Security

Do not commit sensitive information to GitHub.

Never commit:

Database passwords JWT secrets API keys .env files containing secrets Personal credentials

Use environment variables for sensitive configuration.

Author Pranjal Barot
