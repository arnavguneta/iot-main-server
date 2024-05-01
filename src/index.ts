import 'module-alias/register';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import lampRoutes from '@routes/lampRoutes';
import IOService from '@services/ioService';
import os from 'os';

dotenv.config();

const port: number = parseInt(process.env.PORT as string, 10) || 3001;
const app: Express = express();

const { server } = IOService.initializeIO(app);

console.log(port);
app.use(`${process.env.API_ENDPOINT}/lamp`, lampRoutes);

server.listen(port, () => {
    const networkInterfaces = os.networkInterfaces();
    const interfaces = networkInterfaces['en0'];
    const addresses = interfaces?.filter((iface) => iface.family === 'IPv4');
    const ipv4Address = addresses && addresses.length > 0
        ? addresses[0].address : 'localhost';
    console.log(`[server]: Server is running at http://${ipv4Address}:${port}`);
});
