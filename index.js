const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

//use middlewares
app.use(cors());
app.use(express.json());

//Routes


//conection
app.listen(PORT, () => {
  console.log(`Connected on: ${PORT}`);
});
