const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Sample data for demonstration purposes
const allSensorData = [
    { temperature: '25°C', battery: '80%', cameraStatus: 'Active' },
    // Add data for other sensors here
];

// Define an endpoint that returns data for all sensors
app.get('/getAllSensorData', (req, res) => {
    res.json(allSensorData);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
