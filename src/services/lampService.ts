import IOService from './ioService';

const LampService = {
    togglePower: async () => {
        IOService.emitSafely('toggleLampPower');
    },
    setPowerState: async (state: boolean) => {
        IOService.emitSafely('lampPower', { state });
    }
};

export default LampService;


