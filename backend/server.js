import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'



// import {v2 as cloudinary} from 'cloudinary';

import connectMongoDb from './db/mongoDbConnection.js'
import authRouter from  './routes/auth.router.js'

dotenv.config({ path: './.env' });
// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_API_SECRET,
// });


const app = express()
dotenv.config();

app.use((req, res, next) => {
    req.setTimeout(600000); // 10 minutes
    res.setTimeout(600000); // 10 minutes
    next();
  });

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,               // Allow cookies to be sent
}));

app.use(express.json({ limit: "10mb" }));  // Increase limit to 10MB
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const port=8000
app.use(cookieParser());

app.use('/api/auth',authRouter);

app.listen(process.env.BACKEND_SERVER_PORT,()=>{
    console.log(`listening to the post with the port number ${process.env.BACKEND_SERVER_PORT}`);
    connectMongoDb();
})