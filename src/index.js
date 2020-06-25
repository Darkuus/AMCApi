const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./Database/MongoDB')
const port = process.env.PORT;

const app = express();

app.use(cors({
    //origin: https://meuapp.com
}));
app.use(express.json());
app.use(routes);

app.listen(process.event.PORT || port);