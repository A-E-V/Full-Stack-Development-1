const express = require('express');
const app = express();
const port = 3000;

// GET request: /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET request: /user with Querystring
app.get('/user', (req, res) => {
  const { firstname, lastname } = req.query;
  const user = { firstname, lastname };
  res.json(user);
});

// POST request: /user with path parameter
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  const user = { firstname, lastname };
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// http://localhost:3000/hello
