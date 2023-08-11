const {
  getAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById,
} = require("../../src/controllers/usuarioController");
const Usuario = require("../../src/models/usuarioModel");

jest.mock("../../src/models/usuarioModel");

describe("Usuario Controller", () => {
  //Se declara un objeto mockRes en el que se simulan los metodos status y json
  let mockRes;
  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  //Se definen diferentes pruebas utilizando la función test para cada función del controlador.
  test("getAllUsuarios debería obtener todos los usuarios", async () => {
    const mockUsuarios = [
      { id: "1", name: "Libro 1" },
      { id: "2", name: "Libro 2" },
    ];
    Usuario.find.mockResolvedValue(mockUsuarios);
    const mockReq = {};
    await getAllUsuarios(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuarios);
  });

  test("createUsuario debería crear un nuevo libro", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    mockUsuario.save = () => {};
    Usuario.create.mockResolvedValue(mockUsuario);
    const mockReq = { body: mockUsuario };
    await createUsuario(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  });

  test("deleteUsuario debería eliminar un libro", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    Usuario.findByIdAndRemove.mockResolvedValue(mockUsuario);
    const mockReq = { params: { id: "1" } };
    await deleteUsuario(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  });
  test("getUsuarioById debería obtener los detalles de un usuario", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    Usuario.findById.mockResolvedValue(mockUsuario);
    const mockReq = { params: { id: "1" } };
    await getUsuarioById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  })
  test("updateUsuario debería actualizar la información de un usuario", async () => {
    const mockUsuario = {
      id: "1",
      name: "Lucas Perez",
      email: "lucasperez@gmail.com",
    };
    Usuario.findByIdAndUpdate.mockResolvedValue(mockUsuario);
    const mockReq = { params: { id: "1" }, body: mockUsuario };
    await updateUsuario(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsuario);
  })
});
