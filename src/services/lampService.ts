import IOService from './ioService.js';

const LampService = {
    togglePower: async () => {
        const io = IOService.getIO();
        if (io) {
            io.emit('toggleLampPower');
          } else {
            throw new Error('Socket.IO instance not available');
          }
    },
};

export default LampService;


