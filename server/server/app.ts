import express from 'express';
import fs from "fs"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Testing with typescript');
});

fs.writeFileSync('text.txt', "test")

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});