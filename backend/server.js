import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./database/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // to parse incoming requests of JSON (from req.body)

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Home route");
});

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Backend server is running on ${PORT}`);
});
