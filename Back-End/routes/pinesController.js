//pin.routes.js
import { Router } from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const pinRouter = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

pinRouter.post('/', upload.single('img'), async (req, res) => { 
    const image = req.file;
    const { titulo, descripcion } = req.body;

    if (!image) {
        return res.status(400).json({ error: 'Imagen es requerida' });
    }

    const imgRoute = `http://localhost:5001/uploads/${image.filename}`;

    try {
        const newPost = await prisma.publicaciones.create({
            data: {
                titulo,
                descripcion,
                img: imgRoute,
            },
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error al guardar el pin:", error);
        res.status(500).json({ error: "Ocurrió un error al guardar el pin" });
    }
});

// Nuevo endpoint para obtener todos los pines
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
