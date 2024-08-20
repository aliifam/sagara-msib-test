import express from "express";
import dotenv from "dotenv";
import router from "./routes/shirt.route.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
