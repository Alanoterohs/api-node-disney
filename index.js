const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const mountRoutes = require('./routes/index');

//use middlewares
app.use(cors());
app.use(express.json());

//Routes
mountRoutes(app);

//conection
app.listen(PORT, () => {
  console.log(`Connected on: ${PORT}`);
});
