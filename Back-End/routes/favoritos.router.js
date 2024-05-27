// favoritos.router.js

import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const favoritosRouter = Router();

// Ruta para obtener todos los pines favoritos
favoritosRouter.get('/', async (req, res) => {
  try {
    const favoritos = await prisma.favoritos.findMany();
    res.json(favoritos);
  } catch (error) {
    console.error("Error al obtener los pines favoritos:", error);
    res.status(500).json({ error: "Ocurrió un error al obtener los pines favoritos" });
  }
});

// Ruta para agregar un pin a favoritos
favoritosRouter.post('/:pinId', async (req, res) => {
  const { pinId } = req.params;

  try {
    // Guardar el pin en favoritos en la base de datos
    await prisma.favoritos.create({
      data: {
        publicacion: { connect: { id: parseInt(pinId) } } // Establece la relación con la publicación
      },
    });

    res.status(201).json({ message: 'Pin agregado a favoritos correctamente' });
  } catch (error) {
    console.error("Error al agregar el pin a favoritos:", error);
    res.status(500).json({ error: "Ocurrió un error al agregar el pin a favoritos" });
  }
});

export default favoritosRouter;
