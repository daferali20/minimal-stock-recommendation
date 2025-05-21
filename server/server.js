import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommend", (req, res) => {
  const { symbol } = req.body;
  res.json({ recommendation: `📈 التوصية لسهم ${symbol}: شراء مبدئي عند 150$` });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
