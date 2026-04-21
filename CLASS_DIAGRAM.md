# Class Diagram – Hospital Vital Monitoring System

```mermaid
classDiagram

class User {
    -id: String
    -email: String
    -password: String
    -role: String
    +login()
    +logout()
}

class Patient {
    -patientId: String
    -name: String
    -age: int
    +logVital()
    +viewHistory()
}

class Doctor {
    -doctorId: String
    -name: String
    -specialization: String
    +viewPatients()
    +receiveAlert()
}

class Admin {
    -adminId: String
    -name: String
    +manageUsers()
    +viewLogs()
}

class VitalSign {
    -vitalId: String
    -bloodPressure: float
    -heartRate: int
    -temperature: float
    -weight: float
    -timestamp: DateTime
    +isAbnormal()
}

class Alert {
    -alertId: String
    -message: String
    -severity: String
    -createdAt: DateTime
    -status: String
    +send()
    +markResolved()
}

class Report {
    -reportId: String
    -generatedAt: DateTime
    -fileType: String
    +generateReport()
}

User <|-- Patient
User <|-- Doctor
User <|-- Admin

Patient "1" --> "0..*" VitalSign : logs
Doctor "1" --> "0..*" Patient : monitors
VitalSign "1" --> "0..1" Alert : triggers
Doctor "1" --> "0..*" Alert : receives
Patient "1" --> "0..*" Report : generates

```

# 🧠 3. CLASS DIAGRAM EXPLANATION

## Explanation

The class diagram represents the structure of the Hospital Vital Monitoring System.

The **User** class is the base class, with **Patient**, **Doctor**, and **Admin** inheriting from it. This supports role-based functionality.

The **Patient** class is responsible for logging and viewing vital signs, while the **Doctor** class monitors patients and receives alerts.

The **VitalSign** class stores health data and includes logic to determine abnormal readings. When abnormal values are detected, an **Alert** is created and sent to the doctor.

The **Report** class allows patients to generate health summaries over time.

Relationships such as one-to-many between Patient and VitalSign reflect real-world scenarios where a patient can have multiple health records.

This design aligns with functional requirements, use cases, and behavioral diagrams developed in previous assignments.
