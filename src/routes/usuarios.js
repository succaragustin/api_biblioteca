const express = require("express");
const router = express.Router();

// Importa el controlador de usuarios
const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuarioController");

// Ruta para obtener la lista completa de usuarios
router.get("/", getAllUsuarios);

// Ruta para obtener los detalles de un usuario específico según su ID
router.get("/:id", getUsuarioById);

// Ruta para crear un nuevo usuario
router.post("/", createUsuario);

// Ruta para actualizar la información de un usuario específico según su ID
router.put("/:id", updateUsuario);

// Ruta para eliminar un usuario específico según su ID
router.delete("/:id", deleteUsuario);

module.exports = router;
