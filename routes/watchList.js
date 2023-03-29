const express = require("express");
const router = express.Router();
const controller = require("../contollers/watchListController");
const auth = require("../middlewares/auth");

router.get("/", auth.check, controller.list);
router.post("/", auth.check, controller.add);
router.delete("/:movie", auth.check, controller.delete);

module.exports = router;
