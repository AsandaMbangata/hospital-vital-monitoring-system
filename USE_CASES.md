# 🎯 Use Case Modeling

## Project: Hospital Vital Monitoring System

This document contains use case diagrams and detailed specifications for the Hospital Vital Monitoring System, aligned with functional requirements from Assignment 4.

---

## 1. Use Case Diagram

```mermaid
@startuml
left to right direction
skinparam packageStyle rectangle

actor Patient as P
actor Doctor as D
actor Nurse as N
actor Administrator as A
actor FamilyMember as F
actor "Email Service" as ES

rectangle "Hospital Vital Monitoring System" {
  usecase "Register Account" as UC1
  usecase "Login" as UC2
  usecase "Log Vital Signs" as UC3
  usecase "View Vital History" as UC4
  usecase "View Patient Dashboard" as UC5
  usecase "View Patient Trends" as UC6
  usecase "Receive Alerts" as UC7
  usecase "Configure Alert Thresholds" as UC8
  usecase "Manage User Accounts" as UC9
  usecase "Grant Family Access" as UC10
  usecase "Generate Health Report" as UC11
  usecase "View Audit Logs" as UC12
}

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

UC7 ..> ES : <<include>>
UC3 ..> UC7 : <<extend>>

@enduml
