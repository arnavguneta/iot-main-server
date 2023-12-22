import { Server } from 'socket.io';
import { Express } from 'express';
import http from 'http';

let ioInstance: Server;

type EventDefinitions = {
    [eventName: string]: unknown; 
  };

const IOService = {
    initializeIO: (app: Express) => {
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
    },
    getIO: () => {
        return ioInstance;
    },
    emitSafely: <Ev extends string>(
        event: Ev, data?: EventDefinitions[Ev]
    ) => {
        const ioInstance = IOService.getIO();
        if (!ioInstance) {
            throw new Error('Socket.IO instance not available');
        }
        ioInstance.emit(event, data);
    }
};

export default IOService;