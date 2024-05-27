// comentarios.routes.js

import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const comentarioRouter = Router();

comentarioRouter.post('/', async (req, res) => {
  const { contenido } = req.body;

  try {
    // Guardar el comentario en la base de datos
    await prisma.comentarios.create({
      data: {
        contenido,
      },
    });

    res.status(201).json({ message: 'Comentario guardado correctamente' });
  } catch (error) {
    console.error("Error al guardar el comentario:", error);
    res.status(500).json({ error: "Ocurrió un error al guardar el comentario" });
  }
});

export default comentarioRouter;
