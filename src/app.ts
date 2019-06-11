import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.set("port", port);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.get("/", (_, res) => res.render("index"));

export default app;