const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
// app.use(cors({
//   origin: 'http://servidor.com.br'
// }));
app.use(express.json());
app.use(routes);
app.listen(3333);
