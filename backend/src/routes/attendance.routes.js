import express from 'express';
import {markAttendance} from '../controllers/attendance.controller.js';
import  authMiddleware from '../middleware/auth.middleware.js';
import roleMiddleware from '../middleware/role.middleware.js';

const router = express.Router();

//route for marking attendance
router.post(
    "/mark",
    authMiddleware,
    roleMiddleware(["user"]),
    markAttendance
);

export default router;