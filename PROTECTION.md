# Branch Protection Rules

Branch protection rules were configured for the `main` branch to improve code quality and prevent unstable code from being merged.

## Rules Applied

- Require pull request before merging
- Require at least one approval review
- Require status checks to pass before merging
- Block force pushes
- Restrict direct commits to main

## Why These Rules Matter

These protections help ensure:

- All code is reviewed before merging
- Automated tests pass successfully
- Bugs are detected early
- The main branch remains stable
- Team collaboration follows industry CI/CD practices

Using branch protection together with GitHub Actions improves software reliability and supports continuous integration workflows.
