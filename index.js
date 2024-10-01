const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
const port = 3009;

app.use(express.static('public'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
});

app.use(limiter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

console.log(process?.env?.PORT);
app.listen(process?.env?.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
