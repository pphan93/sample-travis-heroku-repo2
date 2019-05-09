/* server.js main file */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req = \n', req);
  res.send('Test CI with Travis');
});

const server = app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('app running on port 3001');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
