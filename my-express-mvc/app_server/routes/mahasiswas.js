const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data dalam Database MongoDB
router.get("/mahasiswa", mahasiswaController.index);
router.post("/insert", mahasiswaController.insert); //insert mahasiswa 
router.patch("/update/:id", mahasiswaController.update); //mengupdate mahasiswa 
router.get("/show/:id", mahasiswaController.show); //show detail mahasiswa by id 
router.delete("/delete/:id", mahasiswaController.destroy); //delete mahasiswa by id
module.exports = router;