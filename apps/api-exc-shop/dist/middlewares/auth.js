"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
function auth(req, res, next) {
    const adminQueryParam = req.query.admin;
    if (adminQueryParam === 'true') {
        next();
    }
    else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
exports.auth = auth;
