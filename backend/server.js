const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const config = require("./config.json");
const cors = require("cors");
require("dotenv").config();
const app = express();
const clientRoutes = require("./routes/clientRoutes/clientPostRoutes");
// const plaidPostRoutes = require("./routes/clientRoutes/plaidPostRoutes");

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", clientRoutes);
// app.use("/", plaidPostRoutes);

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
