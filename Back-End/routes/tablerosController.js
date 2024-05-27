import { Router } from "express";
const router = Router();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const nuevoTablero = await prisma.tableros1.create({
      data: {
        titulo,
        descripcion,
      },
    });

    res.status(201).json({ message: 'Tablero creado correctamente', tablero: nuevoTablero });
  } catch (error) {
    console.error('Error al crear el tablero:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el tablero' });
  }
});

export default router;
