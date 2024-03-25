import express from 'express';
import config  from 'dotenv/config';
import { router } from './routes/homePage.js';
import exphbs from 'express-handlebars';

const app = express();

app.use(
    express.urlencoded({
        extended:true
    }),
    express.json()
);

app.engine('handlebars', exphbs());

app.use('/',router);

app.listen(process.env.ROUTE)
