import express from "express";
const router = express.Router();
import * as userController from "../Controllers/userControllers.js"; // Make sure this path is correct

router.post("/register", userController.register); // Ensure the controller is correctly imported
router.get("/login", userController.login);
router.get("/", userController.getAllUsers); // Route to get all users

export default router;
