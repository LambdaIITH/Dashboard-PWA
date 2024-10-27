const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static('web'));

app.get('/.well-known/assetlinks.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/.well-known/assetlinks.json'));
});

app.get('*', (req, res) => {
  const originalPath = req.path;
  res.redirect(`/#${originalPath}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
