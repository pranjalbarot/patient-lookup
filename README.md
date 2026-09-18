###Requirements
###Install the following:
Make sure the following are installed:
Java 21
Maven 
Node.js 20+ 
npm 
PostgreSQL 
Git

## Verify the installations:
java -version 
mvn -version 
node -v 
npm -v 
psql --version

##Clone the Project git clone YOUR_GITHUB_REPOSITORY_URL 
cd patient-lookup


# Database Setup
The application uses PostgreSQL.
## 1. Create Database
Open PostgreSQL or pgAdmin and create the database:
CREATE DATABASE patient_lookup;

## 2. Configure PostgreSQL
Open:
backend/src/main/resources/application.properties

Update the PostgreSQL configuration:
spring.datasource.url=jdbc:postgresql://localhost:5432/patient_lookup
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
Replace YOUR_USERNAME and YOUR_PASSWORD with your local PostgreSQL credentials.

## 3. Database Schema
The database schema is located at:
backend/src/main/resources/schema.sql
Run schema.sql against the patient_lookup database if your application is configured to use it for database initialization.
### One important point
If your `schema.sql` is automatically executed by Spring Boot, the person setting up the project **doesn't need to manually run the file**. Spring Boot can initialize the database when the backend starts, depending on your configuration.

## 4. Backend Setup
##1. Open Backend
cd backend

##2. JWT Configuration
The application requires a JWT secret.
Set the followingenvironment variable:
JWT_SECRET=your-secret-key IntelliJ IDEA
In IntelliJ:
Go to:
Run → Edit Configurations → Spring Boot Application→ Environment variables
Add:
Under Environment variables, add:
JWT_SECRET=your-secret-key

##3. Run the Backend
From the backend folder:
mvn spring-boot:run
The backend runs on:
http://localhost:8080

## 5. Test REST API using Swagger / OpenAPI
After starting the backend, open:
http://localhost:8080/swagger-ui/index.html
Swagger can be used to view and test
provides documentation and testing for the REST API.

Enter username and password 
Generate token
Authorize admin or user
Then you can test GET, PUT, POST, DELETE
Admin is allowed for DELETE operation while user can't

## 6. Frontend Setup
Open anothera new terminal.:
Go to the frontend folder:
cd frontend
Install dependencies:
npm install
Start the frontendapplication:
npm run dev
The frontend normally runs at:
http://localhost:5173

## 7. API Configuration
Open the URL shown in the terminal.
The frontend communicates with the Spring Boot backend through Axios.
Check:
frontend/src/api/api.js
Make sure the API URL points to:
baseURL: "http://localhost:8080"

## 8. Authentication
The application uses JWT-based authentication.

## 9. The login process works as follows:
User enters username and password.
Frontend sends the credentials to the backend.
Backend validates the credentials.
Backend generates a JWT token.
Frontend stores the token.
The token is sent with protected API requests.
Backend validates the token before allowing access.
Authorization

## 10. The application supports role-based authorization.
Example roles:
USER
ADMIN

Authorization controls which operations a user can perform.
For example, administrative operations can be restricted to users with the ADMIN role.
Application Features
Authentication
User login
JWT authentication
Role-based authorization
Secure API requests
Logout
Patient Management
View patient list
Search patients
View patient details
Create patient
Update patient
Delete patient

Author Pranjal Barot
