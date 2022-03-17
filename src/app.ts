import express, {Application} from 'express';
import {routes} from './routes';
import dotenv from 'dotenv';
import {sayHello} from "./utils";
dotenv.config();

const app: Application = express();
app.use('/karvi', routes)

app.listen(process.env.PORT || 1000, () =>
    {
        console.log(sayHello())
        console.log(`Server is running on port ${process.env.PORT || 1000}`)
    }
)