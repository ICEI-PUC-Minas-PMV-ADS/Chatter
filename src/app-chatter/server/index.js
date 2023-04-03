const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {cors: {origin: 'http://localhost:5173'}});

const PORT = 4000;

// Define o esquema do modelo de dados para as mensagens do chat
const messageSchema = new mongoose.Schema({
  text: String,
  authorId: String,
  author: String,
});

// Cria o modelo de dados para as mensagens do chat
const Message = mongoose.model('Message', messageSchema);

mongoose.connect('mongodb+srv://chatterapp:98328152Ka@chatter.3uw1lur.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão bem sucedida!');
}).catch((err) => {
  console.error(err);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

io.on('connection', socket => {
  console.log('usuario conectado', socket.id);

  socket.on('disconnect', reason => {
    console.log('Usuario desconectado', socket.id)
  });

  socket.on('set_username', username => {
    socket.data.username = username
  });

  socket.on('message', text => {
    const message = new Message({
      text,
      authorId: socket.id,
      author: socket.data.username
    });

    message.save().then(() => {
      io.emit('receive_message', {
        text,
        authorId: socket.id,
        author: socket.data.username
      });
    }).catch((err) => {
      console.error(err);
    });
  });
});
