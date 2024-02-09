import { appfirebase, db } from './services/config';
const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  try {
    res.send({ result: "Hello World!", db });
  } catch (error) {
    console.error("Error accessing Firebase database:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.post('/', (req, res) => {
  const postData = req.body;
  console.log('Received POST data:', postData);
  // ทำตามที่คุณต้องการกับข้อมูลที่ได้รับ
  // เช่น บันทึกลงฐานข้อมูล, ประมวลผลข้อมูล, หรือทำอย่างอื่น ๆ
  // ส่งตอบกลับไปที่ frontend
  res.send('POST request to the homepage');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
