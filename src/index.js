const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./Database/MongoDB')
//const port = process.env.PORT;

const app = express();

app.use(cors({
    //origin: https://meuapp.com
}));
app.use(express.json());
app.use(routes);

const host = '0.0.0.0';
const port = process.env.PORT || 3333;

app.listen(port, host, function() {
    console.log("Server started.......");
});
//app.listen(process.eventNames.PORT || 3333);