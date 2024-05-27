//index.js
// index.js
import 'dotenv/config'; // Añade esto para cargar las variables de entorno desde .env
// Importa multer
import multer from 'multer';

import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import registerRouter from './routes/Register.js';
import loginRouter from './routes/Login.js'; // Importa el enrutador de login
//import { guardarPin } from './routes/pinesController.js'; // Importa la función para guardar pines
import tablerosRouter from './routes/tablerosController.js'; // Importa el enrutador de tableros
import pinRouter from './routes/pin.routes.js';
//import { guardarPin } from './routes/pinesController.js'; // Importa la función para guardar pines
//import tablerosRouter from "./routes/tableros.js";
import favoritosRouter from "./routes/favoritos.router.js";
import comentariosRouter from './routes/comentarios.routes.js';
//import obtFavoritosRouter from './routes/obtFavoritos.js';
//import buscarRouter from './routes/buscar.js';


const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));

// Middleware para añadir PrismaClient a req
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

// Configura multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica la carpeta donde se guardarán los archivos
    cb(null, 'uploads/'); // Ruta de la carpeta de activos dentro de tu proyecto
  },
  filename: function (req, file, cb) {
    // Define el nombre del archivo
    cb(null, Date.now() + '-' + file.originalname)
  }
})


// Configura la ruta para servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));
// Inicializa multer con la configuración
const upload = multer({ storage: storage })

// Enrutador para el registro
app.use("/api/register", registerRouter);

// Enrutador para el login
app.use("/api/login", loginRouter);
app.use("/api/tableros", tablerosRouter);
app.use("/api/favoritos", favoritosRouter);
app.use('/api/comentarios', comentariosRouter);
//app.use('/api/favoritos', obtFavoritosRouter);
//app.use('/api/buscar', buscarRouter);
// Configura la ruta para guardar pines con multer
app.use('/api/pin', pinRouter);
//app.post('/api/pines', upload.single('imagen'), guardarPin); // upload.single('imagen') indica que solo se espera un archivo con el nombre 'imagen'
//app.use("/api/tableros", tablerosRouter); // Usa el enrutador para tableros

app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});
