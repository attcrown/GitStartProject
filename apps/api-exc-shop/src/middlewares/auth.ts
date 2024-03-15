// middlewares/auth.ts
import { Request, Response, NextFunction } from 'express';

export function auth(req: Request, res: Response, next: NextFunction) {
    const adminQueryParam = req.query.admin;
    if (adminQueryParam === 'true') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
