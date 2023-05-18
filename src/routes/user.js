import userController from "../controllers/userController";
import verifyToken from "../middlewares/verifyToken";
import { isAdmin } from "../middlewares/verifyRoles";

const router = require("express").Router();

//Public route

// Private route
router.use(verifyToken);
router.get("/", userController.getUser);

// Admin route
router.use(isAdmin);
router.delete("/delete", userController.deleteUser);

module.exports = router;
