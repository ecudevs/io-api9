const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  descripcion: { type: String, required: true },
  urlFoto: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  feCreacion: { type: Date, default: new Date() },
  estado: { type: String, default: "A" }
});

const producto = mongoose.model("producto", productosSchema);
module.exports = producto;
