// routes/itemRoutes.ts
import express from 'express';
import { getAllItems , createItem ,getItemsByName , deleteItem} from '../controllers/typeItemsController';   

const router = express.Router();

export const getAll = router.get('/items', getAllItems);
export const getItemName = router.get('/items/search', getItemsByName);
export const create = router.post('/items', createItem);
export const deleteItems = router.delete('/items/:id', deleteItem);

