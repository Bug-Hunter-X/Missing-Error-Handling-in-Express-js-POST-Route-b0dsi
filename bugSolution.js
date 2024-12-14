const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user object
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    //Further data processing
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));