import { Application, Request, Response } from 'express';

import * as HomeController from "./controllers/home";


// export class Router {
export let setupRoutes = (app: Application) => {

    app.get('/', (req: Request, res: Response) => {

        return res.render('layout');
    });

    app.get('/index', HomeController.index);

    return app;
}