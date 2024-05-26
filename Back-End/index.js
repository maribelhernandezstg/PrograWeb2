// index.js
import 'dotenv/config'; // Añade esto para cargar las variables de entorno desde .env
// Importa multer
import multer from 'multer';

import express from "express";
import cors from "cors";
import path from 'path'
import { PrismaClient } from "@prisma/client";
import registerRouter from './routes/Register.js';
import pinRouter from './routes/pin.routes.js';
import loginRouter from './routes/Login.js'; // Importa el enrutador de login
//import { guardarPin } from './routes/pinesController.js'; // Importa la función para guardar pines

const app = express();
const prisma = new PrismaClient();
const dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));
app.use('/uploads', express.static(path.join(dirname, '/uploads')));

// Middleware para añadir PrismaClient a req
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

// Configura multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Especifica la carpeta donde se guardarán los archivos
//     cb(null, path.join(__dirname, '.src/assets')); // Ruta de la carpeta de activos dentro de tu proyecto
//   },
//   filename: function (req, file, cb) {
//     // Define el nombre del archivo
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

// // Inicializa multer con la configuración
// const upload = multer({ storage: storage })

app.use("/api/pin", pinRouter)

// Enrutador para el registro
app.use("/api/register", registerRouter);

// Enrutador para el login
app.use("/api/login", loginRouter);

// Configura la ruta para guardar pines con multer
//app.post('/api/pines', upload.single('imagen'), guardarPin); // upload.single('imagen') indica que solo se espera un archivo con el nombre 'imagen'

app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});
