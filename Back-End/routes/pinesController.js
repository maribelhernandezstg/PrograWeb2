// pinesController.js

import { PrismaClient } from '@prisma/client';
import upload from '../multerConfig';

const prisma = new PrismaClient();

// Función para manejar las solicitudes POST para guardar pines
async function guardarPin(req, res) {
  const { titulo, descripcion } = req.body;

  try {
    // Guardar el pin en la base de datos utilizando Prisma
    const nuevoPin = await prisma.pin.create({
      data: {
        titulo,
        descripcion,
        img: path.join('assets', req.file.originalname) // Ruta relativa de la carpeta de activos
      },
    });

    res.status(201).json({ message: 'Pin guardado correctamente', pin: nuevoPin });
  } catch (error) {
    console.error('Error al guardar el pin:', error);
    res.status(500).json({ error: 'Ocurrió un error al guardar el pin' });
  }
}

// Utiliza Multer como middleware para procesar la carga de archivos
app.post('/api/pines', upload.single('imagen'), guardarPin);

export { guardarPin };
