# Hospital Vital Monitoring System

## Introduction

**Hospital Vital Monitoring System**
The goal of this system is to provide a simple platform for monitoring patient vital signs remotely and allowing healthcare providers to track patient health data more effectively.

---

## What This System Will Do

Once completed, this system will enable:

- **Patients** to register and log their vital signs  
  (blood pressure, heart rate, temperature, weight)

- **Doctors** to view patient data through an interactive dashboard

- **Automated alerts** when vital signs exceed safe thresholds

- **Health reports** for tracking patient progress over time

This helps reduce unnecessary hospital visits while still allowing doctors to monitor patient health.

---

## Project Structure

| File | Description |
|-----|-------------|
| `README.md` | Project overview and navigation |
| `SPECIFICATION.md` | Complete system specification document |
| `ARCHITECTURE.md` | C4 architectural diagrams |
| `STAKEHOLDERS.md` | Stakeholder analysis |
| `REQUIREMENTS.md` | Functional and non-functional requirements |
| `USE_CASE_AND_TEST_DOCUMENT.md` | Assignment 5: Use cases and test cases |
| `AGILE_PLANNING_DOCUMENT.md` | Assignment 6: Agile planning |
| `REFLECTION.md` | Assignment 4 reflection |
| `TEMPLATE_ANALYSIS.md` | Assignment 7: Template comparison and selection |
| `KANBAN_EXPLANATION.md` | Assignment 7: Kanban explanation |
| `REFLECTION_ASSIGNMENT7.md` | Assignment 7: Reflection |
| `STATE_DIAGRAMS.md` | Assignment 8: State Diagrams |
| `ACTIVITY DIAGRAMS.md` | Assignment 8: Activity Diagrams |
| `Behavioral_Diagrams_Assignment 8_Reflection.md` | Assignment 8: Reflection |
| `DOMAIN_MODEL.md` | Assignment 9: Domain Model |
| `CLASS_DIAGRAM.md` | Assignment 9: Class Diagram |
| `ASSIGNMENT9_REFLECTION.md` | Assignment 9: Reflection |
| `CHANGELOG.md` | Assignment 10: Change Log |
| `ASSIGNMENT10_REFLECTION.md` | Assignment 10: Reflection |
| `src/` | Core system class implementations (Assignment 10) |
| `creational_patterns/` | Implementation of all six creational design pattern |
| `tests/` | Jest unit tests validating object creation |
| `docs/` | Additional documentation |

---

## Documentation

-  [System Specification](SPECIFICATION.md)  
-  [System Architecture](ARCHITECTURE.md)
-  [Stakeholder Analysis](STAKEHOLDERS.md)
-  [System Requirements](REQUIREMENTS.md)
-  [Use Case & Test Document](USE_CASE_AND_TEST_DOCUMENT.md)
-  [Reflection](REFLECTION.md)
-  [Agile Planning](AGILE_PLANNING_DOCUMENT.md)
-  [Template Analysis](TEMPLATE_ANALYSIS.md)
-  [Kanban Explanation](KANBAN_EXPLANATION.md)
-  [Assignment_7_Reflection ](REFLECTION_ASSIGNMENT7.md)
-  [State Diagrams ](STATE_DIAGRAMS.md)
-  [Activity_Diagrams ](ACTIVITY_DIAGRAMS.md)
-  [Assignment_8_Reflection ](Behavioral_Diagrams_Assignment_8_Reflection.md)
-  [Domain Model ](DOMAIN_MODEL.md)
-  [Class Diagram ](CLASS_DIAGRAM.md)
-  [Change Log ](CHANGELOG.md)
-  [Assignment 10 Reflection ](ASSIGNMENT10_REFLECTION.md)

---

## Development Status

| Phase | Status |
|------|--------|
| Specification | ✅ Complete |
| Architecture | ✅ Complete |
| Development | 🔄 In Progress |
| Testing | ⏳ Pending |
| Deployment | ⏳ Pending |

---

## Planned Technologies

The following technologies may be used during development:

- **Frontend:** React  
- **Backend:** Node.js / Express  
- **Database:** PostgreSQL  
- **Authentication:** JWT  
- **Version Control:** GitHub

## Kanban Board (Assignment 7)

The Kanban board was created using GitHub Projects to support Agile workflow management and task tracking.

### Customization Choices

The board was customized to better reflect a real-world software development workflow:

- **Backlog**: Stores all identified tasks that are not yet prioritized  
- **To Do**: Tasks selected for the current sprint  
- **In Progress**: Tasks currently being developed  
- **Testing**: Added to ensure features are validated before completion  
- **Blocked**: Added to identify tasks that cannot proceed due to dependencies or issues  
- **In Review**: Tasks being reviewed before completion  
- **Done**: Completed tasks  

Additional columns such as **Testing** and **Blocked** were introduced to improve workflow visibility and align with Agile practices.

### Task Management

- User stories from Assignment 6 were added as GitHub Issues  
- Issues were labeled using `feature` 
- Tasks were assigned using GitHub’s assignment feature  
- The board visually tracks task progress across all stages  

### Screenshot
![Kanban Board](screenshots/custom_kanban_board.png)
![Kanban Board](screenshots/custom_kanban_board_labels.png)

## Design Decisions (Assignment 10)

This system implements multiple creational design patterns to improve flexibility, maintainability, and scalability:

- Simple Factory: Used to create different types of users (Patient, Doctor) through a centralized creation method.
- Factory Method: Used to generate different alert types (e.g., Email and SMS alerts) without modifying existing code.
- Abstract Factory: Used to create related UI components (e.g., web and mobile interfaces) in a consistent way.
- Builder: Used to construct VitalSign objects step-by-step, allowing flexible creation of complex data.
- Prototype: Used to clone existing vital records efficiently without reinitializing objects.
- Singleton: Used to ensure only one instance of the database connection exists throughout the system.

These patterns were selected to demonstrate different object creation strategies while improving code organization, reusability, and scalability.

### Coverage Report

Test coverage was generated using Jest, confirming that all creational patterns are tested.
![Evidence](screenshots/image.png)

---

## Author

**Asanda Mbangata**
