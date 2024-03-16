// routes/detailUserRoutes.ts
import express from 'express';
import { getAllUsers } from '../controllers/detailUserController';

const routerDetailUser = express.Router();

routerDetailUser.get('/users', getAllUsers);

export default routerDetailUser