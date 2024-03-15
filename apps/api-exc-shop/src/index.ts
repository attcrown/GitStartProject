import { db , sequelize} from "./services/config";
import express from "express";
import {routerGetAll , 
  routerCreate , 
  routerGetItemName , 
  routerDeleteItems ,
  routerUpdate
} from "./routes/typeItemsRoutes";
import { auth } from "./middlewares/auth";

const app = express();
const port = 3001;

app.use(express.json());
// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// check DB pg
sequelize.authenticate().then(() => {
  console.log('pg Connection has been established successfully.');
})
// check DB firebase
if(db) console.log('firebase Connection has been established successfully.');

// auth
app.use(auth);

// routes
app.use(routerGetAll);
app.use(routerCreate);
app.use(routerGetItemName);
app.use(routerDeleteItems);
app.use(routerUpdate);

