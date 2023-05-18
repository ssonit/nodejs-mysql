import bookController from "../controllers/bookController";
import verifyToken from "../middlewares/verifyToken";

const router = require("express").Router();

// router.use(verifyToken);
router.get("/", bookController.getBooks);

module.exports = router;
