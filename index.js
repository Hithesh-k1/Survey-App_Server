const express = require("express");
require("./services/passport");


const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);
