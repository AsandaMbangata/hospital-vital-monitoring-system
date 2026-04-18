

stateDiagram-v2
    [*] --> Unregistered

    Unregistered --> Registered : User signs up
    Registered --> Verified : Email verified
    Verified --> Active : Login successful

    Active --> Suspended : Admin action
    Suspended --> Active : Reactivated

    Active --> Deleted : User deletes account



