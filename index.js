import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes";

const app = express();

dotenv.config();

//init config
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

//Connect database
require("./src/config/connection");

//Route

routes(app);

app.listen(8000, () => {
  console.log("Server is running");
});
