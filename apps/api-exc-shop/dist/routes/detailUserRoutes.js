"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/detailUserRoutes.ts
const express_1 = __importDefault(require("express"));
const detailUserController_1 = require("../controllers/detailUserController");
const auth_1 = require("../middlewares/auth");
const routerDetailUser = express_1.default.Router();
routerDetailUser.get('/searchusers', auth_1.auth, detailUserController_1.getAllUsers);
routerDetailUser.get('/searchusersid', auth_1.auth, detailUserController_1.getUserById);
routerDetailUser.post('/createusers', detailUserController_1.createUser);
routerDetailUser.put('/updateusers', auth_1.auth, detailUserController_1.updateUser);
exports.default = routerDetailUser;
