// pin.routes.js

import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";

const prisma = new PrismaClient();
const pinRouter = Router();

// Configurar multer para almacenar las imágenes en la carpeta "uploads"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Ruta para crear un nuevo pin
pinRouter.post('/', upload.single('imagen'), async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const image = req.file;
    
    if (!titulo || !descripcion || !image) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const imgRoute = `http://localhost:5001/uploads/${image.filename}`;

    // Guardar el pin en la base de datos
    const newPost = await prisma.publicaciones.create({
      data: {
        titulo,
        descripcion,
        img: imgRoute
      }
    });

    res.status(201).json({ message: 'Pin guardado correctamente', pin: newPost });
  } catch (error) {
    console.error("Error al guardar el pin:", error);
    res.status(500).json({ error: "Ocurrió un error al guardar el pin" });
  }
});

// Ruta para obtener todos los pines
pinRouter.get('/', async (req, res) => {
  try {
    const pines = await prisma.publicaciones.findMany();
    res.json(pines);
  } catch (error) {
    console.error("Error al obtener los pines:", error);
    res.status(500).json({ error: "Ocurrió un error al obtener los pines" });
  }
});

export default pinRouter;
