// Importa las funciones necesarias desde el módulo usuarioController
const {
  getAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById,
} = require("../../src/controllers/usuarioController");

// Importa el modelo Usuario desde el módulo usuarioModel
const Usuario = require("../../src/models/usuarioModel");

// Simula el modelo Usuario
jest.mock("../../src/models/usuarioModel");

// Bloque describe para el Controlador de Usuario
describe("Controlador de Usuario", () => {
  // Declara un objeto mockRes para simular los métodos status y json
  let mockRes;
  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnThis(), // Simula el método status
      json: jest.fn(), // Simula el método json
    };
  });

  // Prueba para la función getAllUsuarios
  test("getAllUsuarios debería obtener todos los usuarios", async () => {
    const mockUsuarios = [
      { id: "1", name: "Libro 1" },
      { id: "2", name: "Libro 2" },
    ];
    // Simula el método find del modelo Usuario para devolver el array mockUsuarios
    Usuario.find.mockResolvedValue(mockUsuarios);
    const mockReq = {};
    await getAllUsuarios(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuarios);
  });

  // Prueba para la función createUsuario
  test("createUsuario debería crear un nuevo usuario", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    // Simula el método create del modelo Usuario para devolver el objeto mockUsuario
    mockUsuario.save = () => {};
    Usuario.create.mockResolvedValue(mockUsuario);
    const mockReq = { body: mockUsuario };
    await createUsuario(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  });

  // Prueba para la función deleteUsuario
  test("deleteUsuario debería eliminar un usuario", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    // Simula el método findByIdAndRemove del modelo Usuario para devolver el objeto mockUsuario
    Usuario.findByIdAndRemove.mockResolvedValue(mockUsuario);
    const mockReq = { params: { id: "1" } };
    await deleteUsuario(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  });

  // Prueba para la función getUsuarioById
  test("getUsuarioById debería obtener los detalles de un usuario", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    // Simula el método findById del modelo Usuario para devolver el objeto mockUsuario
    Usuario.findById.mockResolvedValue(mockUsuario);
    const mockReq = { params: { id: "1" } };
    await getUsuarioById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  })

  // Prueba para la función updateUsuario
  test("updateUsuario debería actualizar la información de un usuario", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    // Simula el método findByIdAndUpdate del modelo Usuario para devolver el objeto mockUsuario
    Usuario.findByIdAndUpdate.mockResolvedValue(mockUsuario);
    const mockReq = { params: { id: "1" }, body: mockUsuario };
    await updateUsuario(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  })
});
