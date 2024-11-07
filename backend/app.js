import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})