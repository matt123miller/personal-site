import * as helpers from '../helpers';
import { Request, Response, NextFunction } from 'express';



export default (req: Request, res: Response, next: NextFunction) => {
    res.locals.h = helpers;
    //@ts-ignore
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
};
