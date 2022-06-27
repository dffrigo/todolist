const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('../todolist/src/routes/todos.route');

app.use(cors());
app.use(express.json());

app.use('/todos', route);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
