require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = +process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const router = require("./router");
app.use(router);

app.use("/", (req, res) => {
  res.status(404).json({
    message: "Page Not Found!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
