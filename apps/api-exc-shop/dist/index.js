"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./services/config");
const express_1 = __importDefault(require("express"));
const typeItemsRoutes_1 = __importDefault(require("./routes/typeItemsRoutes"));
const detailUserRoutes_1 = __importDefault(require("./routes/detailUserRoutes"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
// start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// check DB pg
config_1.sequelize.authenticate().then(() => {
    console.log('pg Connection has been established successfully.');
});
// check DB firebase
if (config_1.db)
    console.log('firebase Connection has been established successfully.');
// routes
app.use(typeItemsRoutes_1.default);
app.use(detailUserRoutes_1.default);
