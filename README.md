
# Prestige Exotics - Exotic Car Inventory System

Prestige Exotics is a full-stack exotic car inventory web application. The project allows users to view available exotic vehicles and allows an admin to manage the vehicle inventory through a protected admin dashboard.
=======
Prestige Exotics is a full-stack exotic car inventory web application. The project allows users to view available exotic vehicles and allows an admin to manage the vehicle inventory.

## Project Features

- View exotic car inventory
- Featured vehicle section on the homepage
- Admin dashboard
- Add new vehicles
- View and manage existing vehicles

- Upload and display vehicle images
- React/Vite frontend
=======
- Upload/display vehicle images
- React frontend
- Spring Boot backend
- MySQL database connection

## Project Structure

```text
exotic-car-inventory/
<<<<<<< HEAD
|
=======
│

├── frontend/                 # React/Vite frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
<<<<<<< HEAD
|
=======
│

├── src/                      # Spring Boot backend source code
│   └── main/
│       ├── java/
│       └── resources/
<<<<<<< HEAD
|
=======
│

├── pom.xml                   # Maven/Spring Boot configuration
├── mvnw                      # Maven wrapper
├── .gitignore
└── README.md
<<<<<<< HEAD
```

## Requirements

Before running this project, make sure you have the following installed:

- Java JDK 17 or higher
- Node.js
- npm
- MySQL
- Git
- VS Code or IntelliJ IDEA

## Backend Setup

The backend is built with Spring Boot and runs from the main project folder.

### 1. Open the main project folder

```bash
cd exotic-car-inventory
```

### 2. Configure MySQL database

Create a MySQL database named:

```sql
CREATE DATABASE exotic_inventory;
```

### 3. Update database settings

Open:

```text
src/main/resources/application.properties
```

Example local database configuration:

```properties
spring.application.name=exotic-car-inventory

spring.datasource.url=jdbc:mysql://localhost:3306/exotic_inventory
spring.datasource.username=root
spring.datasource.password=your_mysql_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

Replace `your_mysql_password` with your actual MySQL password.

### 4. Run the backend

From the main project folder, run:

```powershell
.\mvnw spring-boot:run
```

The backend should run at:

```text
http://localhost:8080
```

## Frontend Setup

The frontend is built with React and Vite.

### 1. Go into the frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the frontend

```bash
npm run dev
```

The frontend should run at:

```text
http://localhost:5173
```

## Admin Dashboard Login Instructions

Before logging into the admin dashboard, make sure both the backend and frontend are running.

### 1. Start the backend

From the main project folder:

```powershell
.\mvnw spring-boot:run
```

Confirm the backend is running at:

```text
http://localhost:8080
```

### 2. Start the frontend

From the frontend folder:

```bash
npm run dev
```

Confirm the frontend is running at:

```text
http://localhost:5173
```

### 3. Open the admin login page

In your browser, go to:

```text
http://localhost:5173/admin/login
```

You can also use the Admin Login link from the navigation menu if it is available.

### 4. Enter admin credentials

Use the current test login credentials:

```text
Username: admin
Password: admin123
```

### 5. Access the dashboard

After a successful login, the app will redirect you to:

```text
http://localhost:5173/admin/dashboard
```

From the admin dashboard, you can access:

- Dashboard overview
- Vehicle management page
- Add vehicle page

### 6. Logout

Use the logout button in the admin sidebar. This removes the admin login status from local storage and returns you to the admin login page.

## Running on a Local Network

To view the frontend from another device on the same Wi-Fi/network, run:

```bash
npm run dev -- --host 0.0.0.0
```

Vite will show a network URL similar to:

```text
http://192.168.1.25:5173
```

Use that URL on another device connected to the same network.

## Common Git Commands

### Check project status

```bash
git status
```

### Add changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "Update project"
```

### Push changes to GitHub

```bash
git push
```

## Important Notes

Do not upload the following folders/files to GitHub:

```text
node_modules/
frontend/node_modules/
target/
frontend/dist/
.env
```

These should be listed in the `.gitignore` file.

## .gitignore Example

```gitignore
### Java / Spring Boot ###
HELP.md
target/
.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### Node / React / Vite ###
node_modules/
frontend/node_modules/
backend/node_modules/

dist/
frontend/dist/
backend/dist/

.env
.env.local
.env.development.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

### IDEs ###
.idea/
.vscode/
*.iws
*.iml
*.ipr

### System Files ###
.DS_Store
```

## Future Improvements

- Add edit vehicle feature
- Add delete confirmation modal
- Add stronger admin authentication
- Add image storage improvements
- Deploy frontend online
- Deploy backend online
- Add search and filter options for inventory
- Add vehicle details page

## Author

Created by George Mays.
=======
>>>>>>> 
