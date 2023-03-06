const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 3030
router(app);
app.use(cors());

app.listen(port, () => {
  console.log(`Server running in: http://localhost:${port}`);
});