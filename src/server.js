import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`Server listening on port httP://localhost:${PORT}`);

app.listen(PORT, handleListening);
