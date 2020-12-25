const express = require('express');
const cors = require('cors');
const path = require('path');

const initialData = require('./initialData.json');

const app = express();

// CORS
const corsOptions = { origin: '*', credentials: true, secure: false };
app.use(cors(corsOptions));

app.get('/', (req, res) => {res.send(initialData)});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3344, () => {
  console.log('Simple server is now available');
});