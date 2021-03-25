require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth")

// DB CONNNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNNECTED");
  })
  .catch(console.log("DB CRASHED"));

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// MY ROUTES
app.use("/api", authRoutes)
// PORT
const port = process.env.PORT || 8000;

// STARTNG SERVER
app.listen(8000, () => {
  console.log(`app is running at ${port}`);
});
