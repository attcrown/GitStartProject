"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/itemRoutes.ts
const express_1 = __importDefault(require("express"));
const typeItemsController_1 = require("../controllers/typeItemsController");
const auth_1 = require("../middlewares/auth");
const routerTypeItem = express_1.default.Router();
routerTypeItem.get('/items', typeItemsController_1.getAllItems);
routerTypeItem.get('/items/search', typeItemsController_1.getItemsByName);
routerTypeItem.post('/items', auth_1.auth, typeItemsController_1.createItem);
routerTypeItem.delete('/items/:id', auth_1.auth, typeItemsController_1.deleteItem);
routerTypeItem.put('/items/:id', auth_1.auth, typeItemsController_1.updateItem);
exports.default = routerTypeItem;
