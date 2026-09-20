
import mongoose from 'mongoose';

const attendenceSchema = new mongoose.Schema({
    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    date: {
        type: Date,
        required: true
        
    },
    markedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['present', 'late'],
        
        required: true
    }

})
 export default mongoose.model('Attendance', attendenceSchema);
