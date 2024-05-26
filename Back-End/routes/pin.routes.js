import { Router } from "express";
import path from 'path';
import multer from "multer";

const pinRouter = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica la carpeta donde se guardarán los archivos
      cb(null, 'uploads/'); // Ruta de la carpeta de activos dentro de tu proyecto
    },
    filename: function (req, file, cb) {
      // Define el nombre del archivo
      cb(null, Date.now() + '-' + file.originalname)
    }
  });
const upload = multer({storage : storage});

pinRouter.post('/', upload.single('imagen'),(req, res, next) =>{
    const image = req.file;
    const input = req.body;
    const imageRoute = `http://localhost:5001/uploads/${image.filename}`;
    
    res.status(201).json({message: 'Hola, se mando un request'}).end();
})


export default pinRouter;