const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  // Define los campos del usuario
  nombre: String,
  email: String,
  // ...
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
