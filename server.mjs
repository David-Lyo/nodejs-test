import express from "express";
import { createServer } from 'node:http';
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('User connected');
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});