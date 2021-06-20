const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const PORT = (process.env.PORT || 3001);

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1', router);

app.use((req, res) => res.send({message: 'Route not found'}));

app.listen(PORT, () => console.log('Server listen on port: ', PORT));