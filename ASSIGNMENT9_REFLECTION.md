# Reflection – Domain Modeling and Class Diagram

Designing the domain model and class diagram for the Hospital Vital Monitoring System was both challenging and insightful. It required translating requirements, use cases, and behavioral diagrams into a structured object-oriented design.

One key challenge was deciding the correct level of abstraction. It was not always clear whether certain elements should be separate classes or attributes. For example, modeling alerts as a separate class instead of embedding them in VitalSign improved clarity and better reflected system behavior.

Defining relationships between entities was another challenge. While some were straightforward, others required careful thinking, especially when determining how alerts relate to both vital signs and doctors. Understanding multiplicity helped ensure accurate representation of real-world interactions.

Maintaining alignment with previous assignments was also important. The class diagram had to reflect functional requirements such as logging vitals and sending alerts, while remaining consistent with use cases and behavioral diagrams.

Trade-offs were made to keep the design simple and practical. Inheritance was used for user roles, but unnecessary complexity was avoided. Defining appropriate methods for each class also required careful consideration to ensure clear responsibilities.

Overall, this assignment improved my understanding of object-oriented design and highlighted the importance of structure, clarity, and consistency in system development.
