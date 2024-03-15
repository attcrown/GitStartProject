import { appfirebase, db , pool} from "./services/config";
import express, { json } from "express";
import {getAll , create , getItemName , deleteItems} from "./routes/typeItemsRoutes";

const app = express();
const port = 3001;

app.use(express.json());

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// routes
app.use(getAll);
app.use(create);
app.use(getItemName);
app.use(deleteItems);

// check DB
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
    return;
  }
  console.log('Connected to PostgreSQL:', res.rows[0].now);
});













// app.get("/", (req, res) => {
//   const data = {
//     result: "Hello World!",
//     db: db,
//     pool : pool
//   };
//   res.json(data);
//   console.log('data success');
// });

// app.get('/items', (req, res) => {
//   pool.query('SELECT * FROM myproject.type_items;', (err, result) => {
//     if (err) {
//       console.error('Error executing query', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(result.rows);
//   });
// });

// app.post('/items', (req, res) => {
//   console.log(req.body)
//   const { seq_no, name, active } = req.body;
  
//   pool.query(
//     'INSERT INTO myproject.type_items (seq_no, name, created_at, updated_at, active) VALUES ($1, $2, NOW(), NOW(), $3) RETURNING *',
//     [seq_no, name, active],
//     (err, result) => {
//       if (err) {
//         console.error('Error executing query', err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
//       console.log('Data inserted:', result.rows[0]);
//       res.status(201).json(result.rows[0]);
//     }
//   );
// });

// app.delete('/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   pool.query(
//     'DELETE FROM myproject.type_items WHERE id = $1',
//     [itemId],
//     (err, result) => {
//       if (err) {
//         console.error('Error executing query', err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
//       console.log('Data deleted');
//       res.status(204).end();
//     }
//   );
// });

// app.patch('/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   const { seq_no} = req.body;

//   pool.query(
//     'UPDATE myproject.type_items SET seq_no = COALESCE($1, seq_no), updated_at = NOW() WHERE id = $2 RETURNING *',
//     [seq_no, itemId],
//     (err, result) => {
//       if (err) {
//         console.error('Error executing query', err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
//       if (result.rows.length === 0) {
//         res.status(404).json({ error: 'Item not found' });
//         return;
//       }
//       console.log('Data updated:', result.rows[0]);
//       res.status(200).json(result.rows[0]);
//     }
//   );
// });

// app.put('/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   const { seq_no} = req.body;

//   pool.query(
//     'UPDATE myproject.type_items SET seq_no = $1, name = $2, active = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
//     [seq_no, name, active, itemId],
//     (err, result) => {
//       if (err) {
//         console.error('Error executing query', err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
//       if (result.rows.length === 0) {
//         res.status(404).json({ error: 'Item not found' });
//         return;
//       }
//       console.log('Data updated:', result.rows[0]);
//       res.status(200).json(result.rows[0]);
//     }
//   );
// });

