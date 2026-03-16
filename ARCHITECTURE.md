# 🏗️ System Architecture Document

## 1. Introduction

### Project Title
**Hospital Vital Monitoring System**

### Domain
**Healthcare / Hospital - Remote Patient Monitoring**

The healthcare domain involves managing patient health data, enabling communication between patients and healthcare providers, and ensuring timely medical interventions. This system focuses on the **remote patient monitoring** sub-domain within the hospital/healthcare sector, which is increasingly important for chronic disease management (hypertension, diabetes, heart disease), post-operative care, and reducing hospital readmissions.

In this domain, patients require regular monitoring of vital signs (blood pressure, heart rate, temperature, weight), but frequent hospital visits are inconvenient, costly, and time-consuming. Healthcare providers need real-time visibility into patient vitals between appointments to enable timely interventions for abnormal readings.

### Problem Statement
Patients with chronic conditions require regular vital sign monitoring, but frequent hospital visits are inconvenient, costly, and time-consuming. Healthcare providers lack real-time visibility into patient vitals between appointments, which can lead to delayed interventions for abnormal readings and potentially serious health complications.

**This system enables:**
- Patients to log vital signs from home via a web interface
- Doctors to view patient data through an interactive dashboard
- Automated email alerts when vitals exceed safe thresholds
- Health reports for tracking patient progress over time
- Reduced unnecessary hospital visits while improving patient outcomes

### Individual Scope
This project is feasible for individual development over one semester because:

| Factor | Justification |
|--------|---------------|
| **Scope** | Focused on ONE workflow: vital signs monitoring (not full EHR system) |
| **Users** | Two primary roles: Patient and Doctor (manageable complexity) |
| **Technology** | Uses standard web technologies (Node.js, React, PostgreSQL) |
| **Data** | Manual data entry only (no medical device integration required) |
| **Infrastructure** | Free/educational tier cloud services (Render, Supabase, SendGrid) |
| **Time** | Incremental development: auth → data entry → dashboard → alerts → reports |

**Out of Scope (This Semester):**
- ❌ Medical device integration (automated vital capture)
- ❌ Full Electronic Health Records (EHR) system
- ❌ Billing and insurance processing
- ❌ Mobile application (web-first approach)
- ❌ Multi-hospital deployment

**Minimum Viable Product (MVP):**
1. User authentication (patient/doctor roles)
2. Patient vital entry form (BP, heart rate, temperature, weight)
3. Doctor dashboard showing patient list and recent vitals
4. Email alerts for abnormal readings
5. Basic vital history view

---

## 2. C4 Level 1: Context Diagram

The Context Diagram shows the system as a single box and its relationships with external actors and systems.

```mermaid
C4Context
    title System Context Diagram - Hospital Vital Monitoring System

    Person(patient, "Patient", "Logs vital signs from home via web browser")
    Person(doctor, "Doctor", "Views patient data and receives alerts")
    Person(admin, "Administrator", "Manages users and system configuration")

    System(vital_system, "Hospital Vital Monitoring System", "Enables remote patient vital tracking with automated alerts")

    System_Ext(email_service, "Email Service", "SendGrid", "Sends alert notifications to doctors")
    System_Ext(database, "Database", "PostgreSQL", "Stores patient profiles and vital sign records")

    Rel(patient, vital_system, "Logs vital signs", "HTTPS")
    Rel(doctor, vital_system, "Views patient dashboard", "HTTPS")
    Rel(admin, vital_system, "Manages system settings", "HTTPS")
    Rel(vital_system, email_service, "Sends alerts", "SendGrid API")
    Rel(vital_system, database, "Stores/retrieves data", "SQL via Prisma")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

## 2. C4 Level 2: Container Diagram

```mermaid
C4Container
    title Container Diagram - Hospital Vital Monitoring System

    Person(patient, "Patient", "Web browser")
    Person(doctor, "Doctor", "Web browser")
    Person(admin, "Administrator", "Web browser")

    System_Boundary(system_boundary, "Hospital Vital Monitoring System") {
        Container(react_app, "React Web Application", "React 18 + Vite", "Provides interactive UI for all users")
        Container(express_api, "Express API Server", "Node.js + Express", "REST API for backend operations")
        Container(auth_module, "Authentication Module", "JWT + bcryptjs", "User authentication and authorization")
        Container(vital_service, "Vital Data Service", "Node.js + Prisma", "CRUD operations for vital signs")
        Container(alert_service, "Alert Service", "Node.js", "Monitors vitals and triggers alerts")
        ContainerDb(postgres_db, "PostgreSQL Database", "PostgreSQL 14+", "Stores all system data")
    }

    System_Ext(sendgrid, "SendGrid Email Service", "SendGrid API", "Delivers alert emails")

    Rel(patient, react_app, "Uses", "HTTPS")
    Rel(doctor, react_app, "Uses", "HTTPS")
    Rel(admin, react_app, "Uses", "HTTPS")
    Rel(react_app, express_api, "Calls REST API", "HTTPS/JSON")
    Rel(express_api, auth_module, "Authenticates", "Internal")
    Rel(express_api, vital_service, "Routes data", "Internal")
    Rel(express_api, alert_service, "Triggers alerts", "Internal")
    Rel(vital_service, postgres_db, "Reads/Writes", "SQL")
    Rel(auth_module, postgres_db, "Reads/Writes", "SQL")
    Rel(alert_service, sendgrid, "Sends emails", "API")
    Rel(alert_service, postgres_db, "Reads thresholds", "SQL")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

## 2. C4 Level 3: Component Diagram

```mermaid
C4Component
    title Component Diagram - React Web Application

    Container_Boundary(react_app, "React Web Application") {
        Component(login, "Login Component", "React", "User authentication UI")
        Component(patient_dash, "Patient Dashboard", "React", "Vital entry form")
        Component(doctor_dash, "Doctor Dashboard", "React", "Patient monitoring")
        Component(api_client, "API Client", "Axios", "HTTP communication")
    }

    Rel(login, api_client, "Uses")
    Rel(patient_dash, api_client, "Uses")
    Rel(doctor_dash, api_client, "Uses")
```

## 2. C4 Level 4: Class Diagram

```mermaid
classDiagram
    class User {
        +string id
        +string email
        +string password
        +string role
        +login()
    }

    class Patient {
        +string patientId
        +string name
        +logVital()
        +getHistory()
    }

    class Doctor {
        +string doctorId
        +string name
        +viewPatients()
        +receiveAlert()
    }

    class VitalSign {
        +string vitalId
        +float bloodPressure
        +int heartRate
        +float temperature
        +DateTime timestamp
        +isAbnormal()
    }

    class Alert {
        +string alertId
        +string message
        +DateTime createdAt
        +sendEmail()
    }

    User <|-- Patient
    User <|-- Doctor
    Patient --> VitalSign : logs
    Doctor --> VitalSign : views
    VitalSign --> Alert : triggers
```

## 2. C4 Level 5: Flowchart Diagram

```mermaid
flowchart LR
    A[Patient Browser] -->|HTTPS| B[React Web App]
    B -->|REST API| C[Express API]
    C -->|Auth| D[Auth Service]
    C -->|Store| E[Vital Service]
    E -->|SQL| F[(PostgreSQL)]
    E -->|Check| G[Alert Service]
    G -->|Email| H[SendGrid]
    H -->|Notify| I[Doctor Browser]
    
    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#e8f5e9
    style F fill:#ffebee
    style H fill:#fff9c4
```
