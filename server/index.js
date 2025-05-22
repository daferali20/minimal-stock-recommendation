
// خادم بسيط باستخدام Express مع CORS
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/recommend', (req, res) => {
  res.json({ recommendation: '🔍 توصية: شراء سهم AAPL عند 170$' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running on port', PORT));
