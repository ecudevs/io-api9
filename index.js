const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

const ProductoController = require("./Controllers/ProductoController");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/productos", (req, res) => {
  ProductoController.get(res);
});

app.get("/productos/:idProducto", (req, res) => {
  ProductoController.getById(req.params.idProducto, res);
});

app.post("/productos", (req, res) => {
  ProductoController.save(req.body, res);
});

app.put("/productos", (req, res) => {
  ProductoController.update(req.body, res);
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Magic Happens on port: ${port}`));
