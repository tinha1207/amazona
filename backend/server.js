import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  res.send("hello");
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
