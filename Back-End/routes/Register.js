// routes/Register.js
import { Router } from "express";
const router = Router();

router.post("/", async (req, res) => {
  const { username, password, name, lastName, email, avatar } = req.body;

  if (!username || !password || !name || !lastName || !email) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const existingUser = await req.prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return res.status(400).json({ error: "El nombre de usuario ya existe" });
    }

    const existingEmail = await req.prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({ error: "El correo electrónico ya está en uso" });
    }

    const newUser = await req.prisma.user.create({
      data: {
        username,
        password,
        name,
        lastName,
        email,
        avatar,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
