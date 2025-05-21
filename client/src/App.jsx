import React, { useState } from "react";
import axios from "axios";

function App() {
  const [recommendation, setRecommendation] = useState("");

  const getRecommendation = async () => {
    try {
      const res = await axios.post("http://localhost:5000/recommend", { symbol: "AAPL" });
      setRecommendation(res.data.recommendation);
    } catch (error) {
      setRecommendation("حدث خطأ.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📊 توصية لحظية</h2>
      <button onClick={getRecommendation}>جلب التوصية</button>
      <p>{recommendation}</p>
    </div>
  );
}

export default App;
