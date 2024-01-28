const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

app.post('/getData', (req, res) => {
  const sensorId = req.body.sensorId;

  // Replace the following line with your actual logic to fetch data from an API
  const data = fetchDataFromAPI(sensorId);

  res.json(data);
});

// Placeholder function to simulate fetching data from an external API
function fetchDataFromAPI(sensorId) {
  // Replace this with your actual logic to fetch data from an API
  return { id: sensorId, temp: 80, battery: 25 };
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
