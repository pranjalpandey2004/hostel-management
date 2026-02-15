import app from "./src/app.js";
import dotenv from 'dotenv';
import connectDB from "./src/config/db.js";


dotenv.config();
connectDB();
const startServer = async () => {
    try{
        await connectDB();

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
      });


    }
    catch (error){
        console.error(`failed to start the  server : ${error.message}`);
    }
};

startServer();



