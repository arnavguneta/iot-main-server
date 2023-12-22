import { Server } from 'socket.io';
import {Express} from 'express';
import http from 'http';

let ioInstance: Server;

const initializeIO = (app: Express) => {
  if (!ioInstance) {
    const server = http.createServer(app);
    const io: Server = new Server(server);

    io.on('connection', (socket) => {
      console.log('A client connected.');

      socket.on('disconnect', () => {
        console.log('A client disconnected.');
      });
    });

    ioInstance = io;
  }
  return ioInstance;
};

const getIO = () => {
  if (!ioInstance) {
    throw new Error('Socket.IO instance not initialized');
  }
  return ioInstance;
};

export default {
  initializeIO,
  getIO,
};
