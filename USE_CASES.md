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
