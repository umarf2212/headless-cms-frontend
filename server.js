const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the ./out/ folder
app.use(express.static(path.join(__dirname, "out")));

// Catch-all route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
