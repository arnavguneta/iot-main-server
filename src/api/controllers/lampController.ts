import LampService from '@services/lampService';
import { Request, Response } from 'express';

const lampController = {
    toggleLampPower: async (req: Request, res: Response) => {
        try {
            const data = await LampService.togglePower();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: (<Error>err).message });
        }
    },
    setLampPower: async (req: Request, res: Response) => {
        try {
            const powerState = req.params.state === 'on';
            const data = await LampService.setPowerState(powerState);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: (<Error>err).message });
        }
    },
    setBrightness: async (req: Request, res: Response) => {
        try {
            const brightnessLevel = req.params.level || 'high';
            const data = await LampService.setBrightness(brightnessLevel);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: (<Error>err).message });
        }
    }
};

export default lampController;
