# Contributing Guidelines

Thank you for your interest in contributing to the Hospital Vital Monitoring System.

This project follows GitHub Flow, Pull Request reviews, automated testing, and CI/CD practices to ensure code quality and maintain project stability.

## Prerequisites

Before contributing, ensure you have:

* Git
* Node.js 20 or later
* npm

## Project Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd hospital-vital-monitoring-system
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Run the test suite:

```bash
npm test
```

## Branching Strategy

Do not commit directly to the `main` branch.

Create a feature branch for every change:

```bash
git checkout -b feature/your-feature-name
```

Examples:

```text
feature/add-authentication
feature/improve-api-validation
feature/add-patient-search
```

## Coding Standards

Contributors should:

* Follow existing project structure and naming conventions.
* Write clean and readable JavaScript code.
* Keep functions small and maintainable.
* Avoid duplicate code where possible.
* Use meaningful variable and method names.

## Testing Requirements

Before submitting a Pull Request:

1. Run all tests locally.

```bash
npm test
```

2. Ensure all tests pass successfully.
3. Add tests for new functionality when applicable.
4. Do not submit code that causes existing tests to fail.

## Pull Request Process

1. Create a feature branch.
2. Implement your changes.
3. Commit your changes with a meaningful commit message.

```bash
git commit -m "Add patient validation feature"
```

4. Push your branch to GitHub.

```bash
git push origin feature/your-feature-name
```

5. Create a Pull Request targeting the `main` branch.
6. Wait for GitHub Actions to complete successfully.
7. Obtain at least one approval review before merging.

## Continuous Integration and Deployment

This repository uses GitHub Actions to automate:

* Dependency installation
* Test execution
* Pull Request validation
* Release artifact generation

Pull Requests cannot be merged if required status checks fail.

## Branch Protection Rules

The `main` branch is protected using GitHub Branch Protection Rules:

* Pull Requests are required before merging.
* At least one review approval is required.
* Status checks must pass before merging.
* Direct commits to `main` are restricted.
* Force pushes are disabled.

These protections help ensure that only tested and reviewed code reaches the production branch.

## Good First Issues

New contributors can start with issues labeled:

* good-first-issue
* feature-request

Example contribution ideas:

* Improve API validation
* Improve Swagger documentation
* Add patient search functionality
* Improve error handling
* Add email notification support

## Reporting Issues

When creating an issue, include:

* Clear title
* Description of the problem
* Steps to reproduce
* Expected behaviour
* Actual behaviour
* Screenshots or logs if available

## Code of Conduct

Contributors should:

* Communicate respectfully.
* Provide constructive feedback.
* Collaborate professionally.
* Support an inclusive learning environment.

Thank you for contributing to the Hospital Vital Monitoring System and helping improve healthcare software quality and reliability.
