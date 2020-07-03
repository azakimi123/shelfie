const express = require('express');
const ctrl = require('./controller');


const app = express();

app.use(express.json());


//Endpoints



app.listen(4000, () => console.log(`Server is running on 4000`));