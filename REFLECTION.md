# Reflection - Challenges Faced in Balancing Stakeholder Needs

Working on the Hospital Vital Monitoring System showed that balancing stakeholder needs is one of the most difficult parts of requirements engineering. Different stakeholders want different things from the same system, and these needs do not always align perfectly.

One major challenge was balancing usability and security. Patients need a system that is simple and quick to use, especially because some users may not be highly technical. At the same time, healthcare data is sensitive, so the system must enforce strong authentication, protected access, and secure data handling. Adding stronger security controls can make the system feel less convenient, which creates a trade-off between ease of use and protection of information.

Another challenge was balancing the needs of doctors and administrators. Doctors want fast access to meaningful patient data and alerts without unnecessary complexity. Administrators, however, need stronger control over configuration, user roles, threshold settings, and audit logging. This means the system must serve both clinical efficiency and administrative control without becoming too complicated.

A further challenge was balancing performance and maintainability. Stakeholders such as doctors and patients expect the system to respond quickly, especially when recording vitals or viewing dashboards. However, IT support and future developers need the system to be modular, well documented, and easy to maintain. Building for speed alone can sometimes reduce code clarity, while focusing only on maintainability can slow development.

Scalability was also an important consideration. Hospital management may want the system to support growth over time, with more patients, more doctors, and more historical records. However, since this is an individual semester project, the design has to remain realistic and achievable. For this reason, the requirements were written in a way that supports future growth while still keeping the current implementation manageable.

Another issue was deciding how detailed alerts should be. Doctors want immediate notifications for abnormal readings, but too many alerts can create alert fatigue, where important warnings may be ignored because there are too many minor ones. This required thinking carefully about threshold configuration, filtering, and how alerts are presented.

Overall, this assignment helped me understand that requirements engineering is not only about listing features. It is about understanding people, identifying conflicts between needs, and writing requirements that are clear, realistic, and traceable. The final requirements aim to create a balance between patient usability, clinical usefulness, administrative control, security, and technical sustainability.
