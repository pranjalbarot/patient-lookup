###Requirements

###Install the following:

Java 21
Maven
Node.js 20+
npm
PostgreSQL
Git
1. Clone the Project
git clone YOUR_GITHUB_REPOSITORY_URL
cd patient-lookup
2. Database Setup

Open PostgreSQL / pgAdmin.

Create a database:

CREATE DATABASE patient_lookup;

Open the database script:

database/database.sql

Run the SQL script against the patient_lookup database.

The script creates the required tables and test data.

3. Backend Setup

Open a terminal and go to the backend folder:

cd backend

Open:

src/main/resources/application.properties

Configure PostgreSQL:

spring.datasource.url=jdbc:postgresql://localhost:5432/patient_lookup
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update

Replace YOUR_USERNAME and YOUR_PASSWORD with the local PostgreSQL credentials.

JWT Configuration

Set the following environment variable:

JWT_SECRET=your-secret-key

In IntelliJ:

Run
→ Edit Configurations
→ Spring Boot Application
→ Environment variables

Add:

JWT_SECRET=your-secret-key
Run Backend

From the backend folder:

mvn spring-boot:run

Backend:

http://localhost:8080

4. Swagger / OpenAPI

After starting the backend, open:

http://localhost:8080/swagger-ui/index.html

Swagger can be used to view and test the REST API.

5. Frontend Setup

Open another terminal.

Go to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm run dev

The frontend normally runs at:

http://localhost:5173

Open the URL shown in the terminal.

6. API Configuration

Check:

frontend/src/api/api.js

Make sure the backend URL is configured correctly:

baseURL: "http://localhost:8080"

7. Login

Use the test account provided in the database script.

Example:

Username: testuser
Password: password

Use the credentials from database.sql if they are different.

8. Run the Complete Application

Two terminals are required.

Terminal 1 - Backend
cd backend
mvn spring-boot:run
Terminal 2 - Frontend
cd frontend
npm install
npm run dev

Then open:

http://localhost:5173
Troubleshooting
Backend does not connect to PostgreSQL

Check:

spring.datasource.url
spring.datasource.username
spring.datasource.password

Make sure PostgreSQL is running.

Frontend dependencies are missing

Run:

npm install

inside the frontend folder.

JWT error

Make sure JWT_SECRET is configured in the Spring Boot environment variables.

Port already in use

Make sure ports 8080 and 5173 are available.
