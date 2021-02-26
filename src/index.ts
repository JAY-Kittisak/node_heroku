import { config } from 'dotenv';
config();
import express from "express";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import createServer from "./createServer";


const startServer = async () => {
    try {
        // Connect to the database *_*
        await mongoose.connect(`${process.env.DATABASE_URL}`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        console.log('Data connected');

        const port = process.env.PORT || 5000;
        const app = express();
        app.use(cookieParser());
        const server = await createServer();

        server.applyMiddleware({
            app,
            cors: { origin: process.env.FRONTEND_URI, credentials: true }
        });

        app.listen(port, () =>
            console.log(`Server is  ready at http://localhost:${port}${server.graphqlPath}`)
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
