# Reflection

Working on the behavioral diagrams for the Hospital Vital Monitoring System highlighted how important it is to move beyond static system design and focus on how the system behaves over time. While previous assignments focused on requirements, use cases, and architecture, this assignment required a deeper understanding of workflows and state transitions within the system.

One of the main challenges was identifying the correct level of detail for both activity and state diagrams. It was difficult to decide how much logic should be included without making the diagrams complex. For example, in the "Log Vital Signs" workflow, I had to balance between showing every possible validation step and keeping the diagram readable. This required focusing only on key decision points such as validation and abnormal detection, which are directly linked to system requirements.

Another challenge was ensuring consistency with previous assignments. The diagrams had to align with functional requirements that were defined earlier, such as logging vital signs, detecting abnormal readings, and sending alerts. This required careful cross-referencing to ensure that every diagram accurately represented the intended system behavior. It also helped reinforce traceability between requirements, use cases, and system design.

Understanding the difference between activity diagrams and state diagrams was also an important learning experience. Activity diagrams focus on workflows and processes, while state diagrams represent how an object changes over time. Initially, there was some confusion between these two perspectives, doing research and readng about them helped me differintiate their purposes . For instance, the activity diagram for sending alerts shows the sequence of actions, while the state diagram for alerts shows how an alert transitions from created to resolved.

Another difficulty was modeling real-world scenarios such as error handling and alternative flows. Real systems do not always follow a single path, so it was necessary to include conditions such as invalid input, failed validation, or declined access. Including these alternative paths made the diagrams more realistic and aligned with the use cases developed in Assignment 5.

Overall, this assignment demonstrated that behavioral modeling plays a critical role in system design. It helps visualize how the system operates, improves communication of complex processes, and supports testing by clearly defining system behavior. The process also reinforced the importance of maintaining consistency across all development artifacts. By connecting requirements, use cases, and diagrams, the system becomes more structured, understandable, and easier to implement.

This assignment improved my ability to think about systems dynamically rather than just structurally, and it showed how important it is to represent both workflows and state changes when designing real-world applications.
