### User Account State Diagram

```mermaid
stateDiagram-v2
    [*] --> Unregistered

    Unregistered --> Registered : User signs up
    Registered --> Verified : Email verified
    Verified --> Active : Login successful

    Active --> Suspended : Admin action
    Suspended --> Active : Reactivated

    Active --> Deleted : User deletes account
```

### User Account State Diagram Explanation

The User Account object transitions from Unregistered to Registered when a user signs up (FR-01). After email verification, the account becomes Verified and can move to Active upon successful login.

Administrative actions allow accounts to be Suspended or reactivated. Users may also delete their accounts, transitioning to the Deleted state.

This diagram supports:
- FR-01: Patient registration
- FR-09: Admin account management

```mermaid
stateDiagram-v2
    [*] --> Created

    Created --> Submitted : User submits vitals
    Submitted --> Validated : System checks data

    Validated --> Normal : Within threshold
    Validated --> Abnormal : Exceeds threshold

    Abnormal --> AlertTriggered : Alert generated
```

```mermaid
stateDiagram-v2
    [*] --> Generated

    Generated --> Sent : Email sent
    Sent --> Acknowledged : Doctor views alert

    Acknowledged --> Resolved : Issue addressed|
```

```mermaid
stateDiagram-v2
    [*] --> Registered

    Registered --> PendingApproval : Credentials submitted
    PendingApproval --> Approved : Admin verifies

    Approved --> Active : Login
    Active --> Suspended : Admin action
```

```mermaid
stateDiagram-v2
    [*] --> Requested

    Requested --> Generating
    Generating --> Generated

    Generated --> Downloaded
```

```mermaid
stateDiagram-v2
    [*] --> Created

    Created --> Active
    Active --> Updated

    Updated --> Active
```

```mermaid
stateDiagram-v2
    [*] --> Requested

    Requested --> Granted
    Granted --> Revoked
 ```
 
