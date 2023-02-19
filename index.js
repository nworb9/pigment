import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// serve css as static
app.use(express.static(__dirname));

app.get("/hello", (req, res) => {
  res.send("Howdy world!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Pigments listening on port ${port}`);
});
