//require('dotenv/config');
const app = require('./app');
const PORT = process.env.PORT || 8080;
// app.listen(3333);
app.listen(PORT);