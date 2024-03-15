// routes/itemRoutes.ts
import express from 'express';
import { getAllItems , 
    createItem ,
    getItemsByName , 
    deleteItem ,
    updateItem
} from '../controllers/typeItemsController'; 

const routerTypeItem = express.Router();

routerTypeItem.get('/items', getAllItems);
routerTypeItem.get('/items/search', getItemsByName);
routerTypeItem.post('/items', createItem);
routerTypeItem.delete('/items/:id', deleteItem);
routerTypeItem.put('/items/:id', updateItem);

export default routerTypeItem;

