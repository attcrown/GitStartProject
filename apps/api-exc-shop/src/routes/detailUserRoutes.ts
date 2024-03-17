// routes/detailUserRoutes.ts
import express from 'express';
import { getAllUsers , createUser} from '../controllers/detailUserController';

const routerDetailUser = express.Router();

routerDetailUser.get('/users', getAllUsers);
routerDetailUser.post('/create', createUser);

export default routerDetailUser