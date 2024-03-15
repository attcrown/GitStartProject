// routes/itemRoutes.ts
import express from 'express';
import { getAllItems , 
    createItem ,
    getItemsByName , 
    deleteItem ,
    updateItem
} from '../controllers/typeItemsController'; 

const router = express.Router();

export const routerGetAll = router.get('/items', getAllItems);
export const routerGetItemName = router.get('/items/search', getItemsByName);
export const routerCreate = router.post('/items', createItem);
export const routerDeleteItems = router.delete('/items/:id', deleteItem);
export const routerUpdate = router.put('/items/:id', updateItem);


