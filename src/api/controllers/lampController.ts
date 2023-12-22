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
};

export default lampController;
