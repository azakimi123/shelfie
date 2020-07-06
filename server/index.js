require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');
const app = express();


app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

//Endpoints
app.get('/api/inventory', ctrl.getInventory);
app.get('/api/product/:id', ctrl.getOne);
app.post('/api/product', ctrl.addProduct);
app.delete('/api/product/:id', ctrl.deleteProduct);
app.put('/api/product/:id', ctrl.editProduct);


app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));