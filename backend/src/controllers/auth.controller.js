import User from "../models/user.models.js";
import { createToken } from "../utils/createToken.js";

const TOKEN_OPTIONS = {
  httpOnly: true,
  secure: false,
  maxAge: 3600000,
};

export const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return res.status(400).json({
        message: [
          user.username === username && "El username ya está en uso",
          user.email === email && "El email ya está en uso",
        ].filter(Boolean),
      });
    }

    const newUser = new User({
      username,
      email,
      password,
      role,
    });

    await newUser.save();

    const token = createToken({ userID: newUser._id });

    res.cookie("token", token, TOKEN_OPTIONS);

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const loginUser = async (req, res) => {
  const { inputData, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ username: inputData }, { email: inputData }],
    });

    if (!user) {
      return res.status(400).json({ message: "Credenciales incorrectas" });
    }

    const isPasswordValid = await user.verifyPassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Credenciales incorrectas" });
    }

    const token = createToken({ userID: user._id });

    res.cookie("token", token, TOKEN_OPTIONS);

    res.status(200).json({ message: "Usuario autenticado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", { ...TOKEN_OPTIONS, expires: new Date(0) });
    res.status(200).json({ message: "Desconexión exitosa" });
  } catch (err) {
    console.error("Error al cerrar sesión:", err);
    res.status(500).json({ message: "Error del servidor" });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const userID = req.user;

    const user = await User.findOne({ _id: userID }).select("username");
    if (!user) {
      return res.status(400).json({ message: "El usuario no existe" });
    }

    res.status(200).json({ username: user.username });
  } catch (err) {
    console.error("Error al verificar el usuario:", err);
    res.status(500).json({ message: "Error del servidor" });
  }
};
