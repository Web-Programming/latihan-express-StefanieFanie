const express = require("express");
const router = express.Router();
const housingController = require("../controllers/controllerHousing");
// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data dalam Database MongoDB
router.get("/", housingController.Index);
router.get("/{id}", housingController.Index);
module.exports = router;