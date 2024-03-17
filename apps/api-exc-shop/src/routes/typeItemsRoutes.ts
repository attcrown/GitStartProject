// routes/itemRoutes.ts
import express from 'express';
import { getAllItems , 
    createItem ,
    getItemsByName , 
    deleteItem ,
    updateItem
} from '../controllers/typeItemsController'; 
import { auth } from '../middlewares/auth';

const routerTypeItem = express.Router();

routerTypeItem.get('/items', getAllItems);
routerTypeItem.get('/items/search', getItemsByName);
routerTypeItem.post('/items', auth, createItem);
routerTypeItem.delete('/items/:id', auth, deleteItem);
routerTypeItem.put('/items/:id', auth, updateItem);

export default routerTypeItem;

