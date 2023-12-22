import express from 'express';
const router = express.Router();
import lampController from '@controllers/lampController';

router.get('/power/toggle', lampController.toggleLampPower);
router.get('/power/on', lampController.turnLampOn);
router.get('/power/off', lampController.turnLampOff);

export default router;
