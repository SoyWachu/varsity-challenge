const express = require("express");
const cityController = require("../controller/city");

const router = express.Router();
router.post("/saveCity", cityController.saveCity);
router.delete("/deleteOneCity/:cityId", cityController.deleteCity);
router.get("/getSavedCities", cityController.getSavedCities);
module.exports = router;
