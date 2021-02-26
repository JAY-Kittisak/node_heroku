import { config } from 'dotenv';
config();
import express from "express";
import mongoose from 'mongoose';

import createServer from "./createServer";

// /const { DATA } = process.env;

const startServer = async () => {
    try {
        // Connect to the database *_*
        await mongoose.connect(`${process.env.DATABASE_URL}`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        const port = process.env.PORT || 5000;
        const app = express();
        const server = createServer();

        server.applyMiddleware({ app });

        app.listen(port, () =>
            console.log(`Server is  ready at http://localhost:${port}${server.graphqlPath}`)
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
