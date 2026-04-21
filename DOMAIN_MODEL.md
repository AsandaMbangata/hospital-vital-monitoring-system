# Domain Model – Hospital Vital Monitoring System

## Overview
This domain model identifies the core entities, their attributes, methods, relationships, and business rules for the system.

---

## Domain Entities

| Entity | Attributes | Methods | Relationships |
|--------|-----------|---------|---------------|
| **User** | id, email, password, role, createdAt | login(), logout() | Parent of Patient, Doctor, Admin |
| **Patient** | patientId, name, age | logVital(), viewHistory() | Has many VitalSigns, linked to Doctor |
| **Doctor** | doctorId, name, specialization | viewPatients(), receiveAlert() | Monitors Patients, receives Alerts |
| **VitalSign** | vitalId, bloodPressure, heartRate, temperature, weight, timestamp | isAbnormal() | Belongs to Patient, triggers Alert |
| **Alert** | alertId, message, severity, createdAt, status | send(), markResolved() | Linked to VitalSign and Doctor |
| **Report** | reportId, generatedAt, fileType | generateReport() | Belongs to Patient |
| **Admin** | adminId, name | manageUsers(), viewLogs() | Manages Users |

---

## Relationships

- A **User** can be a **Patient**, **Doctor**, or **Admin** (inheritance).
- A **Patient** can have many **VitalSign** records.
- A **Doctor** monitors multiple **Patients**.
- A **VitalSign** may trigger an **Alert**.
- An **Alert** is sent to a **Doctor**.
- A **Patient** can generate multiple **Reports**.
- An **Admin** manages all **Users**.

---

## Business Rules

- A patient must be registered before logging vital signs.
- Each vital sign must include all required fields (BP, heart rate, temperature, weight).
- Alerts are triggered when vital signs exceed safe thresholds.
- Doctors can only view assigned patients.
- Reports must include historical patient data.
- Admin actions must be logged for auditing purposes.
