import mongoose from "mongoose";
import 'dotenv/config'
const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected',()=>console.log("Database connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/blogs`)
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB