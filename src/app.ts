import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.set("port", port);
app.set("veiews", path.join(__dirname, "../views"));

app.get("/", (_, res) => res.send("Hello World!"));

export default app;