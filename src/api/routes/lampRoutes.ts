import express from 'express';
const router = express.Router();
import lampController from '@controllers/lampController';

router.get('/power/toggle', lampController.toggleLampPower);

export default router;
