const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
// Middleware de registro de solicitações
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
app.use(express.json());
app.use(cors({

    origin: "*", // Ou defina a origem permitida para um domínio específico
    methods: ["GET", "POST"], // Defina os métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Defina os cabeçalhos permitidos
    credentials: true, // Permitir o envio de cookies ou credenciais
}));



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

module.exports = app;
