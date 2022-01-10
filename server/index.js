const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const app = express();
const port = 3001;

dotenv.config(process.cwd(), '.env');

const dbconnect = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

dbconnect.connect((err) => {
    if (err) console.log(`🆘 Mysql connection error: `, err);
    else console.log(`✅ Mysql connected on DB ${process.env.DB_NAME}`);
});

const server = app.listen(port, () =>
  console.log(`✅ Server listening at http://localhost:${port}`)
);

const socketIO = require('socket.io');

const io = socketIO(server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});


io.on('connect', (socket) => {
  console.log('user connected');
  dbconnect.query('SELECT * FROM message', (err, results) => {
    if (err) socket.emit('error', err)
    else socket.emit('initialMessageList', results);
  })

  socket.on('messageFromClient', (messageTextAndAuthor) => {
    const newMessage = [ messageTextAndAuthor.author, messageTextAndAuthor.text ];
    console.log(newMessage)
    dbconnect.query('INSERT INTO message (author, text) VALUES (?,?)', newMessage, (err, result) => {
      if (err) io.emit('error', err)
      else dbconnect.query('SELECT * FROM message WHERE id = ?', result.insertId, (error, message) => {
        if (err) io.emit('error', error)
        else {
          console.log('new message from a client: ', message[0]);
          io.emit('messageFromServer', message[0])
        }
      })
    })
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

