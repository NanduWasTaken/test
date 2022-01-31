const { port } = require('./config.js');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
	return response.sendFile('./index.html', { root: '.' });
});

app.listen(port, () => console.log(`Web Server Running Successfully`.green));