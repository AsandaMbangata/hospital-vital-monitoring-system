# 🎯 Use Case Modeling

## Project: Hospital Vital Monitoring System

This document contains use case diagrams and detailed specifications for the Hospital Vital Monitoring System.

---

## 1. Use Case Diagram

```mermaid
flowchart LR
    %% Actors
    Patient[Patient]
    Doctor[Doctor]
    Nurse[Nurse]
    Admin[Administrator]
    Family[Family Member]
    Email[Email Service]

    %% System Boundary
    subgraph HVMS[Hospital Vital Monitoring System]
        UC1([Register Account])
        UC2([Log In])
        UC3([Log Vital Signs])
        UC4([View Vital History])
        UC5([View Patient Dashboard])
        UC6([View Patient Vital Trends])
        UC7([Detect Abnormal Readings])
        UC8([Send Alert Notification])
        UC9([Manage User Accounts])
        UC10([Maintain Audit Logs])
        UC11([Grant Family Access])
        UC12([Generate Monthly Health Report])
    end

    %% Associations
    Patient --- UC1
    Patient --- UC2
    Patient --- UC3
    Patient --- UC4
    Patient --- UC11
    Patient --- UC12

    Doctor --- UC2
    Doctor --- UC5
    Doctor --- UC6
    Doctor --- UC8

    Nurse --- UC2
    Nurse --- UC5
    Nurse --- UC6

    Admin --- UC2
    Admin --- UC9
    Admin --- UC10

    Family --- UC2
    Family --- UC4

    Email --- UC8

    %% Include relationships
    UC3 -. <<include>> .-> UC7
    UC7 -. <<include>> .-> UC8
    UC9 -. <<include>> .-> UC10
    UC11 -. <<include>> .-> UC10
    UC3 -. <<include>> .-> UC10
    UC4 -. <<include>> .-> UC10
    UC5 -. <<include>> .-> UC10
    UC12 -. <<include>> .-> UC10

```
Actors and roles

Patient
The patient is the main end-user of the system. Patients register, log in, enter vital signs, view their history, grant access to family members, and generate monthly health reports.

Doctor
Doctors log in to monitor assigned patients, view dashboards, inspect patient vital trends, and receive abnormal vital alerts.

Nurse
Nurses support doctors by viewing patient dashboards and vital trends to help prioritize care and monitor patient status.

Administrator
Administrators manage user accounts, approve or deactivate users, and review audit logs for accountability and compliance.

Family Member
Family members can access patient health information only after the patient grants permission.

Email Service
This is an external supporting actor. It is used by the system to deliver alert notifications when abnormal readings are detected.


Relationships between actors and use cases

The diagram shows direct associations between actors and the use cases they perform. It also uses <<include>> relationships for compulsory sub-processes:

Log Vital Signs includes Detect Abnormal Readings because every submitted reading must be checked.
Detect Abnormal Readings includes Send Alert Notification because critical or warning cases trigger alerts.
Manage User Accounts includes Maintain Audit Logs because admin actions must be recorded.
Several important actions include Maintain Audit Logs to support compliance and traceability.
How the diagram addresses stakeholder concerns

This diagram reflects the stakeholder needs identified in Assignment 4:

Patients need easy registration, vital entry, history viewing, and report generation.
Doctors need dashboards, trends, and alerts for fast intervention.
Nurses need quick visibility into patient status.
Administrators need user control and audit logging.
Family members need limited, consent-based access.
IT and compliance stakeholders need audit trails and structured alert handling.

So the diagram stays aligned with your functional requirements and stakeholder analysis.
