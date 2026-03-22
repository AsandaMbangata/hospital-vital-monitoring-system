# System Requirements Document (SRD)

## Project: Hospital Vital Monitoring System

## Introduction

### Purpose
This document defines the functional and non-functional requirements for the Hospital Vital Monitoring System based on stakeholder needs.

### Scope
The system allows patients to record vital signs remotely, doctors to monitor patients, and administrators to manage the system.

### Overview
The system is a web-based application designed to improve remote healthcare monitoring and reduce unnecessary hospital visits.

## 1. Functional Requirements
These functional requirements are derived directly from stakeholder concerns identified in the stakeholder analysis.

| ID | Requirement | Acceptance Criteria | Stakeholder |
|----|-------------|---------------------|-------------|
| **FR-01** | The system shall allow patients to register with email, password, and basic profile information | - Registration completes in ≤30 seconds<br>- Email verification sent within 1 minute<br>- Password must meet complexity requirements (8+ chars, 1 number, 1 special char) | Patients |
| **FR-02** | The system shall allow patients to log vital signs (BP, heart rate, temperature, weight) | - Vital entry form loads in ≤2 seconds<br>- All 4 vital types can be entered<br>- Submission confirms with success message | Patients |
| **FR-03** | The system shall allow patients to view their vital sign history | - History displays in chronological order<br>- Date range filter available<br>- Export to PDF option available | Patients |
| **FR-04** | The system shall allow doctors to register and verify their medical credentials | - Credential upload during registration<br>- Admin approval required before access<br>- Verification completes within 24 hours | Doctors |
| **FR-05** | The system shall allow doctors to view a dashboard of all assigned patients | - Dashboard loads in ≤2 seconds<br>- Patient list shows name, last reading, status<br>- Search and filter by patient name available | Doctors |
| **FR-06** | The system shall allow doctors to view individual patient vital trends | - Trend charts display for each vital type<br>- Time range selectable (7/30/90 days)<br>- Abnormal readings highlighted in red | Doctors |
| **FR-07** | The system shall automatically detect abnormal vital readings | - Thresholds configurable per patient<br>- Detection occurs within 1 minute of submission<br>- Severity levels: Normal, Warning, Critical | Doctors, IT Staff |
| **FR-08** | The system shall send email alerts to doctors for abnormal readings | - Alert sent within 5 minutes of detection<br>- Email includes patient name, vital type, value<br>- Critical alerts sent immediately; warnings batched hourly | Doctors |
| **FR-09** | The system shall allow administrators to manage user accounts | - Admin can activate/deactivate accounts<br>- User role changes require admin approval<br>- Audit log of all admin actions maintained | Administrators |
| **FR-10** | The system shall maintain audit logs of all data access | - Log includes user, timestamp, action, record accessed<br>- Logs retained for 7 years<br>- Logs exportable for compliance audits | Regulatory Bodies |
| **FR-11** | The system shall allow patients to grant family members access to their health data | - Patient initiates access grant<br>- Family member receives email invitation<br>- Access can be revoked at any time | Patients, Family Members |
| **FR-12** | The system shall generate monthly health reports for patients | - Report includes all vitals, trends, alerts<br>- PDF format downloadable<br>- Report generated within 30 seconds | Patients, Insurance Providers |

---

## 2. Non-Functional Requirements

### 2.1 Usability

| ID | Requirement | Measurement |
|----|-------------|-------------|
| **NFR-U01** | The system shall comply with WCAG 2.1 AA accessibility standards | - Screen reader compatible<br>- Color contrast ratio ≥4.5:1<br>- Keyboard navigation supported |
| **NFR-U02** | The system shall be usable on mobile devices | - Responsive design for screens 320px-1920px<br>- Touch-friendly buttons (≥44px)<br>- No horizontal scrolling required |
| **NFR-U03** | New users shall complete vital entry within 2 minutes | - Onboarding tutorial provided<br>- Form fields ≤8 for vital entry<br>- Error messages clear and actionable |

### 2.2 Deployability

| ID | Requirement | Measurement |
|----|-------------|-------------|
| **NFR-D01** | The system shall be deployable on cloud platforms (Render, AWS, Azure) | - Docker containerization supported<br>- Deployment script provided<br>- Deployment completes in ≤30 minutes |
| **NFR-D02** | The system shall support continuous integration/deployment (CI/CD) | - Automated testing on each commit<br>- Zero-downtime deployments<br>- Rollback capability within 5 minutes |

### 2.3 Maintainability

| ID | Requirement | Measurement |
|----|-------------|-------------|
| **NFR-M01** | All API endpoints shall be documented | - OpenAPI/Swagger documentation<br>- Example requests/responses provided<br>- Documentation auto-generated from code |
| **NFR-M02** | Code shall achieve ≥80% test coverage | - Unit tests for all business logic<br>- Integration tests for API endpoints<br>- Coverage report generated on each build |
| **NFR-M03** | System shall include troubleshooting guides | - Common error codes documented<br>- Resolution steps provided<br>- Contact information for support |

### 2.4 Scalability

| ID | Requirement | Measurement |
|----|-------------|-------------|
| **NFR-S01** | The system shall support 1,000 concurrent users during peak hours | - Load testing validates 1,000 users<br>- Response time remains ≤3 seconds under load<br>- Auto-scaling enabled for traffic spikes |
| **NFR-S02** | The system shall handle 10,000 vital sign submissions per day | - Database optimized for high write volume<br>- Queue system for alert processing<br>- No data loss during peak submission |

### 2.5 Security

| ID | Requirement | Measurement |
|----|-------------|-------------|
| **NFR-SEC01** | All user data shall be encrypted using AES-256 at rest | - Database encryption enabled<br>- Encryption keys managed securely<br>- Regular key rotation (90 days) |
| **NFR-SEC02** | All data transmission shall use HTTPS/TLS 1.3 | - SSL certificate valid and current<br>- HSTS enabled<br>- No mixed content warnings |
| **NFR-SEC03** | User passwords shall be hashed using bcrypt with cost factor ≥12 | - Passwords never stored in plain text<br>- Password reset tokens expire in 1 hour<br>- Failed login attempts limited (5 per hour) |
| **NFR-SEC04** | The system shall comply with HIPAA/GDPR data protection requirements | - Patient consent recorded<br>- Data deletion on request<br>- Data breach notification within 72 hours |

### 2.6 Performance

| ID | Requirement | Measurement |
|----|-------------|-------------|
| **NFR-P01** | Dashboard shall load within 2 seconds | - Measured from page request to full render<br>- Tested on 3G network conditions<br>- 95th percentile response time |
| **NFR-P02** | Vital sign submission shall process within 3 seconds | - Measured from form submit to confirmation<br>- Includes database write and alert check<br>- 95th percentile response time |
| **NFR-P03** | Alert emails shall be delivered within 5 minutes of detection | - Measured from abnormal detection to email send<br>- Includes queue processing time<br>- 99% delivery success rate |

---

## 3. Requirements Traceability Matrix

| Requirement | Stakeholder Need | Priority |
|-------------|------------------|----------|
| FR-01, FR-02, FR-03 | Patients: Easy data entry, privacy | High |
| FR-04, FR-05, FR-06 | Doctors: Real-time visibility | High |
| FR-07, FR-08 | Doctors: Timely alerts | High |
| FR-09 | Administrators: User management | Medium |
| FR-10 | Regulatory Bodies: Compliance | High |
| FR-11 | Family Members: Health visibility | Low |
| FR-12 | Insurance Providers: Health records | Low |
| NFR-SEC01-04 | IT Staff, Regulatory: Security | High |
| NFR-P01-03 | Patients, Doctors: Performance | High |
| NFR-S01-02 | IT Support, Administrators: Scalability | Medium |
