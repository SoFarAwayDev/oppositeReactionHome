import {NextFunction, Response} from 'express';

export function checkIfAuthenticated(req: any, res: Response, next: NextFunction) {

    if (req['user']) {
        next();
    } else {
        res.sendStatus(403);
    }
}
