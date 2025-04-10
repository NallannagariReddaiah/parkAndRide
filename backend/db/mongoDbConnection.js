import mongoose from 'mongoose'

const connectMongoDb =async () =>{
    try{
        const conn  = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")
    }catch(err){
        console.log(`Error has occured ${err.message}`);
        process.exit(1);
    }

}
export default connectMongoDb;