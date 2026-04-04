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

2. Product Backlog

| Story ID | User Story | MoSCoW | Story Points | Dependencies |
|----------|-----------|--------|--------------|--------------|
| US-001 | Register account | Must-have | 3 | None |
| US-002 | Login | Must-have | 3 | US-001 |
| US-003 | Log vitals | Must-have | 5 | US-002 |
| US-004 | View history | Must-have | 3 | US-003 |
| US-005 | Dashboard | Must-have | 5 | US-002 |
| US-007 | Detect abnormal readings | Must-have | 5 | US-003 |
| US-008 | Send alerts | Must-have | 3 | US-007 |
| US-006 | View trends | Should-have | 5 | US-005 |
| US-009 | Manage users | Should-have | 3 | US-001 |
| US-010 | Audit logs | Should-have | 3 | US-002 |
| US-011 | Family access | Could-have | 2 | US-004 |
| US-012 | Reports | Could-have | 3 | US-004 |

Backlog Justification

Must-have stories support the MVP and core functionality (registration, login, vitals, alerts).
Should-have stories improve system usability and administration.
Could-have stories provide additional value but are not required for the initial release.

3. Sprint Planning
Sprint Goal

Implement the core functionality of the system by enabling user authentication, vital sign capture, abnormal detection, and basic doctor monitoring.

Selected User Stories
US-001 Register account
US-002 Login
US-003 Log vitals
US-005 Dashboard
US-007 Detect abnormal readings
US-008 Send alerts

Sprint Backlog Table 

| Task ID | Description | Assigned To | Hours | Status |
|---------|------------|-------------|-------|--------|
| T-001 | Design registration UI | Developer | 6 | To Do |
| T-002 | Build registration API | Developer | 8 | To Do |
| T-003 | Implement validation logic | Developer | 6 | To Do |
| T-004 | Design login UI | Developer | 4 | To Do |
| T-005 | Implement authentication | Developer | 8 | To Do |
| T-006 | Build vital entry form | Developer | 6 | To Do |
| T-007 | Save vital data logic | Developer | 8 | To Do |
| T-008 | Create dashboard UI | Developer | 6 | To Do |
| T-009 | Fetch patient data API | Developer | 8 | To Do |
| T-010 | Implement abnormal detection | Developer | 8 | To Do |
| T-011 | Integrate email alerts | Developer | 6 | To Do |
| T-012 | Write tests | Developer | 10 | To Do |

Reflection

Working on Assignment 6 showed me that Agile planning is not only about organizing development work, but also about managing uncertainty, resistance, and self-discipline. Since I am working on this project individually, I had to take on multiple roles at once, including product owner, scrum master, analyst, and developer. This created an internal challenge because each role requires a different mindset.

One of the biggest challenges was prioritization. Many features seemed equally important, but Agile required focusing only on the most critical ones for the MVP. I had to accept that some useful features needed to be postponed. This was difficult because I wanted the system to feel complete, but I learned that delivering value early is more important than completeness.

Estimation was also challenging. Without a team, I had to assign story points on my own. Some tasks appeared simple but involved hidden complexity, while others seemed large but could be simplified. This made estimation feel uncertain and required careful judgment.

Another difficulty was aligning Agile planning with the structured work from previous assignments. Earlier assignments focused on detailed requirements and system design, while Agile required breaking that work into smaller, deliverable pieces. This created tension because not all requirements could fit into one sprint.

On a personal level, I experienced resistance when starting the assignment because it felt overwhelming. However, once I began breaking the work into user stories and tasks, it became easier to manage. This showed me that Agile is not just a development method but also a way to manage personal productivity.

Overall, this assignment helped me understand the importance of prioritization, estimation, and focusing on value. It also showed me how Agile can transform complex requirements into manageable tasks, making development more structured and achievable.
