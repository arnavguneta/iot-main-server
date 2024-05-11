import IOService from './ioService';

const LampService = {
    togglePower: async () => {
        IOService.emitSafely('toggleLampPower');
    },
    setPowerState: async (state: boolean) => {
        IOService.emitSafely('lampPower', { state });
    },
    setBrightness: async (level: string) => {
        IOService.emitSafely('brightness', { level });
    },
};

export default LampService;


