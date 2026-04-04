# Assignment 6: Agile User Stories, Backlog, and Sprint Planning
## Hospital Vital Monitoring System

This document is based on the stakeholder analysis, system requirements, and use cases developed in Assignments 4 and 5. It translates the system into Agile artifacts including user stories, a prioritized backlog, and a sprint plan for the minimum viable product (MVP).

1. User Stories
| Story ID | User Story                                                                                                         | Acceptance Criteria                                                                                                            | Priority |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | -------- |
| US-001   | As a patient, I want to register an account so that I can access the system securely.                              | Registration form accepts valid details; password rules enforced; verification email sent within 1 minute.                     | High     |
| US-002   | As a patient, I want to log in securely so that I can access my health information.                                | Valid users can log in; invalid credentials show error; access is role-based.                                                  | High     |
| US-003   | As a patient, I want to log my vital signs so that my doctor can monitor my condition remotely.                    | Patient can enter blood pressure, heart rate, temperature, and weight; submission succeeds in ≤3 seconds.                      | High     |
| US-004   | As a patient, I want to view my vital history so that I can track my health over time.                             | History is shown in chronological order; date filter works; data loads correctly.                                              | High     |
| US-005   | As a doctor, I want to view a dashboard of assigned patients so that I can monitor patient status quickly.         | Dashboard displays patient name, latest reading, and status; search/filter works; page loads in ≤2 seconds.                    | High     |
| US-006   | As a doctor, I want to view patient vital trends so that I can identify abnormal patterns over time.               | Trend charts display 7/30/90-day ranges; abnormal values are highlighted.                                                      | High     |
| US-007   | As a doctor, I want the system to detect abnormal readings automatically so that I can intervene early.            | System checks readings against thresholds within 1 minute and classifies status as normal, warning, or critical.               | High     |
| US-008   | As a doctor, I want to receive alerts for abnormal vital readings so that I can respond quickly to critical cases. | Critical alerts are sent immediately; warning alerts are sent within defined time; alert contains patient and reading details. | High     |
| US-009   | As an administrator, I want to manage user accounts so that only authorized users can access the system.           | Admin can activate/deactivate users; changes are saved; actions are logged.                                                    | Medium   |
| US-010   | As an administrator, I want audit logs maintained so that the system supports accountability and compliance.       | Logs capture user, action, timestamp, and accessed record; logs can be exported.                                               | Medium   |
| US-011   | As a patient, I want to grant family member access so that trusted people can support my care.                     | Patient can send access invitation; family member can view permitted data; access can be revoked.                              | Low      |
| US-012   | As a patient, I want monthly health reports so that I can review and share my progress easily.                     | Report is generated in PDF format within 30 seconds and includes vitals, trends, and alerts.                                   | Medium   |

