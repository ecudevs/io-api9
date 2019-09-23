const mongoose = require("mongoose");
const Producto = require("../models/Producto");

function ProductoController() {
  this.get = async function(res) {
    let productos = await Producto.find();
    res.send({ productos });
    // Producto.find().then(productos => {
    //   // cuando termine la llamada
    // });
    // console.log(1);
  };

  this.getById = async function(_id, res) {
    let producto = await Producto.findById(mongoose.Types.ObjectId(_id));
    res.send({ producto });
  };

  this.save = async function(productoIn, res) {
    let producto = await new Producto(productoIn).save();
    // let producto = await productoSave.save();
    res.send({ producto });
  };

  this.update = async function(productoIn, res) {
    // let _id = productoIn._id;
    console.log(productoIn);
    let producto = await Producto.findByIdAndUpdate(productoIn._id, productoIn);
    res.send({ producto });
  };
}

module.exports = new ProductoController();
