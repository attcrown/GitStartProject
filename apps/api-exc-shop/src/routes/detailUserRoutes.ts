// routes/detailUserRoutes.ts
import express from 'express';
import { getAllUsers , createUser , updateUser , getUserById} from '../controllers/detailUserController';
import { auth } from '../middlewares/auth';

const routerDetailUser = express.Router();

routerDetailUser.get('/searchusers', auth , getAllUsers);
routerDetailUser.get('/searchusersid', auth , getUserById);
routerDetailUser.post('/createusers', createUser);
routerDetailUser.put('/updateusers', auth , updateUser);

export default routerDetailUser