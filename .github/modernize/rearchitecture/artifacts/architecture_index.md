# Architecture Index

This index is not the full contract. Do not implement from this file alone; follow the artifact paths below.

## Implementation Guide

### Global artifacts

- `unit_graph.yaml`: boundaries, entry points, dependencies, and public contracts.
- `wire_contracts.yaml`: preserve request, response, auth, and error shapes for API work.
- `shared_modules.yaml`: filter by `used_by_units` before changing middleware.
- `cross_unit_state.yaml`: follow token writer/reader rows; unmatched flows require runtime verification.
- `project-structure.md`, `tech-stack.md`, `data-model.md`: existing structure, stack, and schema context.

### Unit: auth-api

- Trigger: POST `/api/auth/register` and `/api/auth/login`.
- Read `units/auth-api/behavior.yaml` and `units/auth-api/bindings.yaml`; filter `wire_contracts.yaml` by `unit: auth-api`.
- Completion evidence: preserve token/error contracts and verify both endpoints against MongoDB.

### Unit: resident-login-page

- Trigger: client `/login` route.
- Read its behavior and bindings; filter `cross_unit_state.yaml` for reader `resident-login-page`.
- Completion evidence: show loading/error state, persist login token, and route to the authenticated resident surface.

### Unit: resident-signup-page

- Trigger: client `/signup` route.
- Read its behavior and bindings; filter `cross_unit_state.yaml` for writer `resident-signup-page`.
- Completion evidence: preserve registration validation/error behavior and route into the authenticated resident surface.

### Unit: attendance-api

- Trigger: POST `/api/attendance/mark`.
- Read its behavior and bindings; filter `wire_contracts.yaml` and `shared_modules.yaml` by `attendance-api`.
- Completion evidence: preserve auth, role, duplicate-day, and success behavior; add runtime coverage for timezone/date edge cases.

### Unit: protected-user-api

- Trigger: GET `/protected`.
- Read its behavior and bindings; filter `shared_modules.yaml` for `protected-user-api`.
- Completion evidence: verify valid, missing, and invalid bearer tokens.
