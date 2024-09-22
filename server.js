import express from "express";
import userRoutes from "./routes/userRoutes.js";
import conectDB from "./config/db.js";

// Connect to DB
conectDB();
// Initialize app
const app = express();

// Middlewares
app.use(express.json());
// Routes
app.use("/", userRoutes);
app.use("/", userRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
