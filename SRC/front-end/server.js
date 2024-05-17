const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to get offer banners
app.get('/offers', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/offers');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching offers');
    }
});

app.listen(port, () => {
    console.log(`Front-end service listening at http://localhost:${port}`);
});
