/**
 * Configure an express instance with the various middlewares and tools etc.
 * Also this might expose various packages through the app instance, is that a good thing?
 */

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import nunjucks from 'nunjucks';
import templateHelpersInserter from "./middleware/templateHelpersInserter";

dotenv.config({ path: '.env' });


const app = express();

nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app,

});

app.set('view engine', 'njk');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

app.use(templateHelpersInserter);

app.use(express.static(__dirname + '/public'))

app.set("port", process.env.PORT || 3000);

export default app;