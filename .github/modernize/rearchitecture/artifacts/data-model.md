# Existing Data Model

## User

Defined in `backend/src/models/user.model.js`.

- `name`: required trimmed string.
- `email`: required, unique, lowercase, trimmed string.
- `password`: required string with six-character minimum; stored as a bcrypt hash by the controller.
- `role`: enum `user|admin`, default `user`.
- `createdAt` and `updatedAt`: Mongoose timestamps.

## Attendance

Defined in `backend/src/models/attendance.model.js`.

- `studentId`: required ObjectId referencing the `user` model.
- `date`: required Date used by the controller as the local day at midnight.
- `markedAt`: Date defaulting to creation time.
- `status`: required enum `present|late`.

## Relationships and current invariants

- A user may have many attendance records through `Attendance.studentId`.
- The application checks for an existing same-user/same-date record before creating attendance.
- There is no database compound unique index enforcing that invariant.
- No hostel, room, complaint, fee, notice, or maintenance entities exist yet.
