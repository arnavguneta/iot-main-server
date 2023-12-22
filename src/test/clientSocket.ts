import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
  reconnectionDelayMax: 10000,
});

// Connect to the Socket.IO server
socket.on('connect', () => {
    console.log('Connected to server');
});

// Listen for events from the server
socket.on('toggleLampPower', (data) => {
    console.log('Received from server:', data);
});

socket.on('lampPower', (data) => {
    console.log('Received from server:', data);
});

// Handle disconnection from the server
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});
