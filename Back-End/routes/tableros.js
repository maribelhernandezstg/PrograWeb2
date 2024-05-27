//tableros.js

import { Router } from "express";
const router = Router();

router.post("/", async (req, res) => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const newTablero = await req.prisma.tableros.create({
      data: {
        titulo,
        descripcion,
      },
    });

    res.status(201).json(newTablero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/buscar", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "El parámetro de búsqueda es obligatorio" });
  }

  try {
    const tableros = await req.prisma.tableros.findMany({
      where: {
        titulo: {
          contains: q,
          mode: "insensitive", // Búsqueda case-insensitive
        },
      },
    });

    res.json(tableros);
  } catch (error) {
    console.error('Error al buscar tableros:', error); // Agregar este log para ver el error
    res.status(500).json({ error: error.message });
  }
});

// Nueva ruta para obtener todos los tableros
router.get("/", async (req, res) => {
  try {
    const tableros = await req.prisma.tableros.findMany();
    res.json(tableros);
  } catch (error) {
    console.error('Error al obtener los tableros:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
