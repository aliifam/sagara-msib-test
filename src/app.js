import express from "express";
import dotenv from "dotenv";
import router from "./routes/shirt.route.js";
import swaggerUi from "swagger-ui-express";
import { docs } from "./docs/openapi.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));
app.disable("x-powered-by");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
