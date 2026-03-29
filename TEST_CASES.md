**Test Case Development**

##Functional Test Cases

| Test Case ID | Requirement ID | Description                              | Steps                                                                                                | Expected Result                                                  | Actual Result | Status |
| ------------ | -------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------- | ------ |
| TC-001       | FR-01          | Patient registers successfully           | 1. Open registration page 2. Enter valid email, password, and profile info 3. Click Register         | Account created and verification email sent within 1 minute      | TBD           | TBD    |
| TC-002       | FR-01          | Registration fails for weak password     | 1. Open registration page 2. Enter password without number/special char 3. Click Register            | System rejects password and shows validation error               | TBD           | TBD    |
| TC-003       | FR-02          | Patient logs vital signs successfully    | 1. Log in as patient 2. Open vital entry form 3. Enter BP, heart rate, temperature, weight 4. Submit | Form submits successfully and success message is shown           | TBD           | TBD    |
| TC-004       | FR-03          | Patient views vital history              | 1. Log in as patient 2. Open history page                                                            | Vital history is displayed in chronological order                | TBD           | TBD    |
| TC-005       | FR-04          | Doctor registration requires approval    | 1. Register as doctor 2. Upload credentials 3. Submit                                                | Account created in pending state and admin approval is required  | TBD           | TBD    |
| TC-006       | FR-05          | Doctor views assigned patients dashboard | 1. Log in as doctor 2. Open dashboard                                                                | Patient list displays with latest readings and status            | TBD           | TBD    |
| TC-007       | FR-06          | Doctor views patient trend charts        | 1. Log in as doctor 2. Select patient 3. Choose 30-day range                                         | Trend charts display with abnormal readings highlighted          | TBD           | TBD    |
| TC-008       | FR-07          | System detects abnormal reading          | 1. Log in as patient 2. Submit a vital value above configured threshold                              | System classifies reading as Warning or Critical within 1 minute | TBD           | TBD    |
| TC-009       | FR-08          | Doctor receives email alert              | 1. Submit abnormal patient reading 2. Wait for alert processing                                      | Doctor receives email alert within 5 minutes                     | TBD           | TBD    |
| TC-010       | FR-09          | Admin deactivates a user account         | 1. Log in as admin 2. Open user management 3. Select a user 4. Click Deactivate                      | User account is deactivated and action logged                    | TBD           | TBD    |
| TC-011       | FR-11          | Patient grants family member access      | 1. Log in as patient 2. Open sharing/access settings 3. Enter family member email 4. Confirm access  | Family member invitation is sent and access is granted           | TBD           | TBD    |
| TC-012       | FR-12          | Monthly health report is generated       | 1. Log in as patient 2. Request monthly report                                                       | PDF report is generated within 30 seconds                        | TBD           | TBD    |


##Non-Functional Test Scenarios

| Test Case ID | Requirement ID        | Description                                     | Steps                                                                                        | Expected Result                                                                                                      | Actual Result | Status |
| ------------ | --------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------- | ------ |
| NFTC-001     | NFR-S01 / NFR-P01     | Performance test for dashboard under load       | 1. Simulate 1,000 concurrent users accessing doctor dashboard 2. Measure response times      | Dashboard remains available and response time stays within ≤3 seconds under load                                     | TBD           | TBD    |
| NFTC-002     | NFR-SEC03 / NFR-SEC02 | Security test for login and password protection | 1. Attempt repeated failed logins 2. Inspect password storage 3. Verify HTTPS/TLS connection | Account is rate-limited after failed attempts, passwords are hashed, and data is transmitted securely over HTTPS/TLS | TBD           | TBD    |


