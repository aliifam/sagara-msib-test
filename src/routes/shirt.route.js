import express from "express";
import ShirtController from "../controllers/shirt.controller.js";

const router = express.Router();

router.post("/shirts", ShirtController.create);
router.get("/shirts", ShirtController.getAll);
router.get("/shirts/search", ShirtController.search);
router.put("/shirts/:id/stock", ShirtController.updateStock);
router.delete("/shirts/:id", ShirtController.delete);
router.get("/shirts/out-of-stock", ShirtController.getOutOfStock);
router.get("/shirts/low-stock", ShirtController.getLowStock);

export default router;
