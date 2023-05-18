import insertController from "../controllers/insertController";

const router = require("express").Router();

router.get("/", insertController.insert);

module.exports = router;
