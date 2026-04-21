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
