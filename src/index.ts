import express, { Express } from 'express';
import dotenv from 'dotenv';
import lampRoutes from '@routes/lampRoutes';
import IOService from '@services/ioService';

dotenv.config();

const port = process.env.PORT || 3000;
const app: Express = express();

IOService.initializeIO(app);

app.use(`${process.env.API_ENDPOINT}/lamp`, lampRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});