// import all file and folders
import express from "express";
import db from "./config/db.js";
import usersRouter from "./routes/usersRoute.js";

// create all constants
const app = express();

// all middlewares
app.use(express.json);
app.use(express.urlencoded({ extended: true }));
db();

// routings
app.use("/api/user", usersRouter);

export default app;
