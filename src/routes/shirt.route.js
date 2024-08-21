import express from "express";
import ShirtController from "../controllers/shirt.controller.js";

const router = express.Router();

/**
 * @openapi
 * /api/shirts:
 *   post:
 *     summary: Create a new shirt
 *     description: Creates a new shirt in the inventory
 *     tags:
 *       - Shirts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               size:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Shirt created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/shirts", ShirtController.create);

/**
 * @openapi
 * /api/shirts:
 *   get:
 *     summary: Get all shirts
 *     description: Retrieve a list of all shirts in the inventory
 *     tags:
 *       - Shirts
 *     responses:
 *       200:
 *         description: A list of shirts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shirt'
 */
router.get("/shirts", ShirtController.getAll);

/**
 * @openapi
 * /api/shirts/search:
 *   get:
 *     summary: Search for shirts
 *     description: Search for shirts by color and size
 *     tags:
 *       - Shirts
 *     parameters:
 *       - name: color
 *         in: query
 *         description: The color of the shirt
 *         required: false
 *         schema:
 *           type: string
 *       - name: size
 *         in: query
 *         description: The size of the shirt
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of matching shirts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shirt'
 */
router.get("/shirts/search", ShirtController.search);

/**
 * @openapi
 * /api/shirts/{id}/stock:
 *   put:
 *     summary: Update shirt stock
 *     description: update shirt stock by id if minus add - before number if plus just number
 *     tags:
 *       - Shirts
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the shirt to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Stock updated successfully
 *       404:
 *         description: Shirt not found
 */
router.put("/shirts/:id/stock", ShirtController.updateStock);

/**
 * @openapi
 * /api/shirts/{id}:
 *   delete:
 *     summary: Delete a shirt
 *     description: Remove a shirt from the inventory
 *     tags:
 *       - Shirts
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the shirt to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shirt deleted successfully
 *       404:
 *         description: Shirt not found
 */
router.delete("/shirts/:id", ShirtController.delete);

/**
 * @openapi
 * /api/shirts/out-of-stock:
 *   get:
 *     summary: Get out of stock shirts
 *     description: Retrieve a list of shirts that are out of stock
 *     tags:
 *       - Shirts
 *     responses:
 *       200:
 *         description: A list of out of stock shirts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shirt'
 */
router.get("/shirts/out-of-stock", ShirtController.getOutOfStock);

/**
 * @openapi
 * /api/shirts/low-stock:
 *   get:
 *     summary: Get low stock shirts
 *     description: Retrieve a list of shirts with low stock
 *     tags:
 *       - Shirts
 *     responses:
 *       200:
 *         description: A list of shirts with low stock
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shirt'
 */
router.get("/shirts/low-stock", ShirtController.getLowStock);

/**
 * @openapi
 * /api/shirts/available:
 *   get:
 *     summary: Get available shirts
 *     description: Retrieve a list of shirts that are available
 *     tags:
 *       - Shirts
 *     responses:
 *       200:
 *         description: A list of shirts that are available
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shirt'
 */
router.get("/shirts/available", ShirtController.getAvailable);

export default router;
