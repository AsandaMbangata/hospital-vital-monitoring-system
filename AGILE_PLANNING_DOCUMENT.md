# Assignment 6: Agile User Stories, Backlog, and Sprint Planning
## Hospital Vital Monitoring System

This document is based on the stakeholder analysis, system requirements, and use cases developed in Assignments 4 and 5. It translates the system into Agile artifacts including user stories, a prioritized backlog, and a sprint plan for the minimum viable product (MVP).

1. User Stories
   
| Story ID | User Story | Acceptance Criteria | Priority |
|----------|-----------|---------------------|----------|
| US-001 | As a patient, I want to register an account so that I can access the system securely. | Valid input accepted; password rules enforced; email verification sent within 1 minute. | High |
| US-002 | As a patient, I want to log in securely so that I can access my health data. | Valid login succeeds; invalid login shows error; role-based access applied. | High |
| US-003 | As a patient, I want to log my vital signs so that my doctor can monitor my health. | All vitals can be entered; submission completes in ≤3 seconds; confirmation shown. | High |
| US-004 | As a patient, I want to view my vital history so that I can track my progress. | Data displayed in order; filter works; loads correctly. | High |
| US-005 | As a doctor, I want to view a patient dashboard so that I can monitor patients quickly. | Dashboard loads ≤2 seconds; shows patient status and latest readings. | High |
| US-006 | As a doctor, I want to view patient trends so that I can detect patterns. | Charts display correctly; abnormal values highlighted. | High |
| US-007 | As a doctor, I want abnormal readings detected automatically so that I can act early. | Detection occurs within 1 minute; severity levels assigned. | High |
| US-008 | As a doctor, I want to receive alerts so that I can respond to critical cases. | Alerts sent within 5 minutes; include patient and value details. | High |
| US-009 | As an admin, I want to manage users so that only authorized users access the system. | Admin can activate/deactivate users; changes saved and logged. | Medium |
| US-010 | As an admin, I want audit logs so that actions are traceable. | Logs include user, action, timestamp; exportable. | Medium |
| US-011 | As a patient, I want to grant family access so that others can support my care. | Access can be granted and revoked; invitation sent. | Low |
| US-012 | As a patient, I want monthly reports so that I can review my health. | PDF generated within 30 seconds; includes vitals and trends. | Medium |
