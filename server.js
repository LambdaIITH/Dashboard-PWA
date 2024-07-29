const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('web'));

app.get('/.well-known/assetlinks.json', (req, res) => {
  res.sendFile(__dirname + '/web/.well-known/assetlinks.json');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
