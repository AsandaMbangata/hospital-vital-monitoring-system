# Changelog - Assignment 10

## Classes Added
- Implemented system classes from UML Class Diagram:
  - User, Patient, Doctor, VitalSign, Alert

- Implemented all 6 creational design patterns:
  - Simple Factory (User creation)
  - Factory Method (Alert creation)
  - Abstract Factory (UI components)
  - Builder (VitalSign construction)
  - Prototype (object cloning)
  - Singleton (Database connection)

- Added unit tests using Jest for all design patterns

## Testing
- Verified object creation correctness
- Tested Singleton instance consistency
- Validated Builder object construction
- Confirmed Prototype cloning behavior

## Project Updates
- Updated GitHub Issues for tracking implementation
- Organized project into /src, /creational_patterns, and /tests folders

  ## GitHub Updates
- Updated GitHub Issues for implementation tracking
- Linked commits to issues for traceability

## Resolved Issues
- #1 US-001 Patient registration
- #3 US-002 Secure login
- #4 US-003 Log vital signs
- #5 US-004 View Vital History
- #6 US-005 Doctor Dashboard
- #8 US-007 Detect Abnormal Readings
- #9 US-008 Send Alerts

## Assignment 11 Updates
- Added repository interfaces
- Implemented in-memory repository layer
- Added RepositoryFactory for abstraction
- Added database repository stub
- Added CRUD unit tests for repositories

## Assignment 12 Updates
```md id="rjlwm9"
- Verified REST API endpoints using Express.js
- Successfully tested GET /api/patients endpoint
```
