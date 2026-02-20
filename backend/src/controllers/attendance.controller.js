import Attendance from '../models/attendance.model.js';

export const markAttendance = async (req, res) => {
    try{
        const userId = req.user.id;

        const today  = new Date();
         today.setHours(0, 0, 0, 0);

         const existingAttendance = await Attendance.findOne({
            studentId: userId,
            date: today
         });

         if (existingAttendance) {
            return res.status(400).json({
                message: "Attendance already marked for today"
            });

         }
          const attendance = await Attendance.create({
            studentId: userId,
            date: today,
            status: "present",
          })

          res.status(201).json({
            message: "Attendance marked successfully",
            attendance,
          })
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}