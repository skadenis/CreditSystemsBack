let express = require("express");
let cookieParser = require("cookie-parser");

let cors = require("cors");

let leadsRouter = require("./routes/leads/index");
let banksRouter = require("./routes/banks/index");
let authRouter = require("./routes/auth/index");

let app = express();

let corsOptions = {
  credentials: true,
};

app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/banks", banksRouter);
app.use("/leads", leadsRouter);
app.use("/auth", authRouter);

module.exports = app;
