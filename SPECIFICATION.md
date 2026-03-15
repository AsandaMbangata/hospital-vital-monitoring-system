# 📋 System Specification Document

## 1. Introduction

### Project Title
**Hospital Vital Monitoring System**

### Domain
**Healthcare / Hospital - Remote Patient Monitoring**

The healthcare domain involves managing patient health data, enabling communication between patients and healthcare providers, and ensuring timely medical interventions. This system focuses on the **remote patient monitoring** sub-domain, which is increasingly important for chronic disease management, post-operative care, and reducing hospital readmissions.

### Problem Statement

**Current Challenge:**
Patients with chronic conditions (hypertension, diabetes, heart disease) require regular monitoring of vital signs. However:
1.  Frequent hospital visits are inconvenient, costly, and time-consuming
2.  Healthcare providers lack real-time visibility into patient vitals between appointments
3.  Abnormal readings may go unnoticed until the next scheduled visit
4.  Manual record-keeping leads to data loss and inefficient tracking

**System Purpose:**
The Hospital Vital Monitoring System will:
1.  Enable patients to log vital signs from home via a web interface
2.  Provide doctors with a dashboard to view patient data in real-time
3.  Automatically alert healthcare providers when vitals exceed safe thresholds
4.  Generate health reports for tracking patient progress over time
5.  Reduce unnecessary hospital visits while improving patient outcomes

### Individual Scope

**Feasibility Justification:**
This project is feasible for individual development over one semester because:

| Factor | Justification |
|--------|---------------|
| **Scope** | Focused on ONE workflow: vital signs monitoring (not full EHR system) |
| **Users** | Two primary roles: Patient and Doctor (manageable complexity) |
| **Technology** | Uses standard web technologies (Python/Node.js, React, PostgreSQL) |
| **Data** | Manual data entry only (no medical device integration required) |
| **Infrastructure** | Free/educational tier cloud services (Heroku, MongoDB Atlas, etc.) |
| **Time** | Incremental development: auth → data entry → dashboard → alerts → reports |

**Out of Scope (This Semester):**
- ❌ Medical device integration (automated vital capture)
- ❌ Full Electronic Health Records (EHR) system
- ❌ Billing and insurance processing
- ❌ Mobile application (web-first approach)
- ❌ Multi-hospital deployment

**Minimum Viable Product (MVP):**
1.  User authentication (patient/doctor roles)
2.  Patient vital entry form (BP, heart rate, temperature, weight)
3.  Doctor dashboard showing patient list and recent vitals
4.  Email alerts for abnormal readings
5.  Basic vital history view



## 2. Functional Requirements

### 2.1 User Management
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | Users can register with email, password, and role (patient/doctor) | High |
| FR-02 | Users can log in securely with authentication | High |
| FR-03 | Users can reset forgotten passwords | Medium |
| FR-04 | Doctors can view list of assigned patients | High |

### 2.2 Patient Features
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-05 | Patients can enter vital signs (BP, heart rate, temperature, weight) | High |
| FR-06 | Patients can view their own vital history | Medium |
| FR-07 | Patients receive confirmation after submitting vitals | Low |

### 2.3 Doctor Features
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-08 | Doctors can view dashboard with all patient vitals | High |
| FR-09 | Doctors can filter patients by abnormal readings | High |
| FR-10 | Doctors can add notes to patient records | Medium |
| FR-11 | Doctors can generate patient health reports | Medium |

### 2.4 Alert System
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-12 | System detects abnormal vital readings automatically | High |
| FR-13 | System sends email alerts to doctors for abnormal readings | High |
| FR-14 | Alert thresholds are configurable per patient | Low |

### 2.5 Reporting
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-15 | System generates weekly/monthly vital trend reports | Medium |
| FR-16 | Reports can be exported as PDF | Low |

---

## 3. Non-Functional Requirements

| Category | Requirement | Target |
|----------|-------------|--------|
| **Performance** | Page load time | < 2 seconds |
| **Availability** | System uptime | 99% during development |
| **Security** | Password encryption | bcrypt hashing |
| **Security** | Data transmission | HTTPS/TLS |
| **Privacy** | Patient data protection | Role-based access control |
| **Scalability** | Concurrent users | Support 100+ users |
| **Reliability** | Data backup | Daily automated backups |
| **Usability** | User interface | Intuitive, minimal training required |
| **Maintainability** | Code documentation | All functions documented |

---

## 4. System Constraints

| Constraint | Description |
|------------|-------------|
| **Developer** | Individual developer (one person) |
| **Timeline** | One semester (approximately 12-13 weeks) |
| **Budget** | Free/educational tier services only |
| **Compliance** | HIPAA/GDPR considerations (educational prototype) |
| **Integration** | No medical device integration (manual entry only) |
| **Platform** | Web-based (responsive design for mobile access) |

---

## 5. Success Criteria

| Criterion | Measurement |
|-----------|-------------|
| **Functional** | All MVP features working and tested |
| **Technical** | C4 diagrams accurately reflect implemented architecture |
| **User Experience** | Patients and doctors can complete core tasks without assistance |
| **Documentation** | Complete specification and architecture documentation |
| **Demo** | Working system demonstrable at end of semester |9