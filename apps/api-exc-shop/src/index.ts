import { db , sequelize} from "./services/config";
import express from "express";
import routerTypeItem from "./routes/typeItemsRoutes";
import routerDetailUser from "./routes/detailUserRoutes";

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

// routes
app.use(routerTypeItem);
app.use(routerDetailUser);

