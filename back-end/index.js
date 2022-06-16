const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: true }));

app.use(router);

app.listen(5000, () => console.log("server listening on port 5000"));
