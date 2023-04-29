import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongo db databse ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error in mongo db ${error}`);
        
    }

}

export default connectDB;