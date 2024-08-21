import express from "express";
import ShirtController from "../controllers/shirt.controller.js";

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Shirt:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the shirt
 *         name:
 *           type: string
 *           description: The name of the shirt
 *         color:
 *           type: string
 *           description: The color of the shirt
 *         size:
 *           type: string
 *           description: The size of the shirt
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the shirt
 *         stock:
 *           type: integer
 *           description: The stock quantity of the shirt
 */

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
 *               name:
 *                type: string
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
 *   patch:
 *     summary: Update shirt stock
 *     description: Update shirt stock by id. Use a negative number to decrease stock and a positive number to increase stock.
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
router.patch("/shirts/:id/stock", ShirtController.updateStock);

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

/**
 * @openapi
 * /api/shirts/{id}:
 *   put:
 *     summary: Edit a shirt
 *     description: Update the details of an existing shirt by ID
 *     tags:
 *       - Shirts
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the shirt to edit
 *         required: true
 *         schema:
 *           type: string
 *           example: "60d5f24e4d0e8f001f6477c2"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the shirt
 *                 example: "Cool Shirt"
 *               color:
 *                 type: string
 *                 description: The color of the shirt
 *                 example: "Blue"
 *               size:
 *                 type: string
 *                 description: The size of the shirt
 *                 example: "M"
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the shirt
 *                 example: 19.99
 *               stock:
 *                 type: integer
 *                 description: The stock quantity of the shirt
 *                 example: 100
 *     responses:
 *       200:
 *         description: Shirt updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shirt'
 *       404:
 *         description: Shirt not found
 *       400:
 *         description: Invalid input
 */
router.put("/shirts/:id", ShirtController.edit);

export default router;
