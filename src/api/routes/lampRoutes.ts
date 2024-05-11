import express from 'express';
const router = express.Router();
import lampController from '@controllers/lampController';

router.get('/power/toggle', lampController.toggleLampPower);
router.get('/power/:state', lampController.setLampPower);
router.get('/brightness/:level', lampController.setBrightness);

export default router;
