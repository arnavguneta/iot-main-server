import IOService from './ioService';

const LampService = {
    togglePower: async () => {
        IOService.emitSafely('toggleLampPower');
    },
    turnOn: async () => {
        IOService.emitSafely('lampPower', { state: true });
    },
    turnOff: async () => {
        IOService.emitSafely('lampPower', { state: false });
    }
};

export default LampService;


