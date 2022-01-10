const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
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
  // [ONE] ::TODO connect to the DB, get all messages and send them to the client 
  // under the event 'initialMessageList'

  // [TWO] ::TODO listen to the 'messageFromClient' event and save the message to the DB
  // then send the new message to the client under the event 'messageFromServer'

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
