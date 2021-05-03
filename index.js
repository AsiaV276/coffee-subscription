const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();
require('dotenv').config();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(express.static('public'));