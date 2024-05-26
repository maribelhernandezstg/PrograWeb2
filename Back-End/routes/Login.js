import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username);

  try {
    console.log('vamos a busar el usuario');
    const user = await req.prisma.user.findUnique({
      where: {
        username,
      },
    });
    console.log('se busco el usuario: ', user);
    
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    console.log('se va a verificar la contraseña');
    console.log(password, user.password);
    
    if(password !== user.password){
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    
    //const passwordMatch = await bcrypt.compare(password, user.password);
    
    // if (!passwordMatch) {
    //   return res.status(401).json({ message: "Contraseña incorrecta" });
    // }
    
    //console.log('se verifico la contraseña: ', passwordMatch);
    
    const token = jwt.sign({ userId: user.id }, "secret_key", { expiresIn: "1h" });
    console.log('se creo el token');
    
    res.status(200).json({...user, token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Ocurrió un error al iniciar sesión" });
  }
});

export default router;
