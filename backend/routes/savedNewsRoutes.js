const express = require("express");
const { savedNews,getNews } = require("../controller/savedNewsController");
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();


router.route('/').get(protect,getNews);

router.route('/saved').post(protect,savedNews);



module.exports =router;