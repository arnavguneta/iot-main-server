import { Server } from 'socket.io';
import { Express } from 'express';
import http from 'http';

let ioInstance: Server;

type EventDefinitions = {
    [eventName: string]: unknown;
};

const IOService = {
    initializeIO: (app: Express) => {
        const server = http.createServer(app);
        if (!ioInstance) {
            const io: Server = new Server(server);

            io.on('connection', (socket) => {
                console.log('A client connected.');

                socket.on('disconnect', () => {
                    console.log('A client disconnected.');
                });
            });
            ioInstance = io;
        }
        return { ioInstance, server };
    },
    getIO: () => {
        return ioInstance;
    },
    emitSafely: <Ev extends string>(
        event: Ev, data?: EventDefinitions[Ev]
    ) => {
        console.debug('server', event, data);
        const ioInstance = IOService.getIO();
        if (!ioInstance) throw new Error('Socket.IO instance not available');
        ioInstance.emit(event, data);
    }
};

export default IOService;