const mongoose = require("mongoose");
const Producto = require("../models/Producto");

function ProductoController() {
  this.get = async function(res) {
    try {
      let productos = await Producto.find();
      res.send({ productos });
    } catch (e) {
      // res.status(500).send({ success: false, mensaje: e.message });
      res.send({ success: false, mensaje: e.message });
    }

    // Producto.find().then(productos => {
    //   // cuando termine la llamada
    // });
    // console.log(1);
  };

  this.getById = async function(_id, res) {
    try {
      let producto = await Producto.findById(mongoose.Types.ObjectId(_id));
      res.send({ producto });
    } catch (e) {
      // res.status(500).send({ success: false, mensaje: e.message });
      res.send({ success: false, mensaje: e.message });
    }
  };

  this.save = async function(productoIn, res) {
    try {
      let producto = await Producto.findById(mongoose.Types.ObjectId(_id));
      res.send({ producto });
    } catch (e) {
      // res.status(500).send({ success: false, mensaje: e.message });
      res.send({ success: false, mensaje: e.message });
    }
  };

  this.update = async function(productoIn, res) {
    // let _id = productoIn._id;
    try {
      console.log(productoIn);
      let producto = await Producto.findByIdAndUpdate(
        productoIn._id,
        productoIn
      );
      res.send({ success: true, producto });
    } catch (e) {
      // res.status(500).send({ success: false, mensaje: e.message });
      res.send({ success: false, mensaje: e.message });
    }
  };
}

module.exports = new ProductoController();
