import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import dataRouter from './routes/dataRouter.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}


main()
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
}

const app = express();
const port = 8080 || process.env.PORT;

app.use(cors({ origin: "https://testttasks.netlify.app", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/user', userRouter);
app.use('/data', dataRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})