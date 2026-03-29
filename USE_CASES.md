# 🎯 Use Case Modeling

## Project: Hospital Vital Monitoring System

This document contains use case diagrams and detailed specifications for the Hospital Vital Monitoring System.

---

## 1. Use Case Diagram

```mermaid
graph TB
    subgraph Actors
        P[👤 Patient]
        D[👨‍⚕️ Doctor]
        N[👩‍⚕️ Nurse]
        A[🔧 Administrator]
        F[👪 Family Member]
        ES[📧 Email Service]
    end

    subgraph UseCases
        UC1[Register Account]
        UC2[Login]
        UC3[Log Vital Signs]
        UC4[View Vital History]
        UC5[View Patient Dashboard]
        UC6[View Patient Trends]
        UC7[Receive Alerts]
        UC8[Configure Thresholds]
        UC9[Manage Users]
        UC10[Grant Family Access]
        UC11[Generate Report]
        UC12[View Audit Logs]
    end

    P --> UC1
    P --> UC2
    P --> UC3
    P --> UC4
    P --> UC10
    P --> UC11

    D --> UC2
    D --> UC5
    D --> UC6
    D --> UC7
    D --> UC8

    N --> UC2
    N --> UC5
    N --> UC7

    A --> UC2
    A --> UC9
    A --> UC12

    F --> UC1
    F --> UC4

    UC7 -.-> ES

    style P fill:#e1f5fe
    style D fill:#e8f5e9
    style N fill:#fff3e0
    style A fill:#f3e5f5
    style F fill:#ffebee
    style ES fill:#fff9c4
