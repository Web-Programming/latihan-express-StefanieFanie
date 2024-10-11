var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

// router.get('/paketwisata', function(req, res, next) {
//   res.render('paketwisata', { title: 'Paket Wisata' });
// });

let listpaketwisata = [
  {'id' : 1, 'foto':'/images/PulauKemaro.jpg', 'nama' : 'Wisata Pulau Kemaro', 'harga' : 500000, 'durasi' : '5 jam', 
    'deskripsi' : 'Nikmati keindahan Pulau Kemaro'},
  {'id' : 2, 'foto':'/images/PuntiKayu.jpg', 'nama' : 'Wisata Punti Kayu', 'harga' : 250000, 'durasi' : '3 jam', 
    'deskripsi' : 'Nikmati keindahan Punti Kayu'},
  {'id' : 3, 'foto':'/images/JSC.jpg', 'nama' : 'Wisata Jakabaring', 'harga' : 100000, 'durasi' : '2 jam', 
    'deskripsi' : 'Nikmati keindahan Jakabaring'},
  {'id' : 4, 'foto':'/images/Ampera.jpg', 'nama' : 'Paket Jelajah Palembang', 'harga' : 2700000, 'durasi' : '3 hari 2 malam', 
    'deskripsi' : 'Jembatan Ampera - Jakabaring - Pulau Kemaro - Museum AlQuran - Masjid Cheng Ho - Taman Purbakala - Museum SMB II - Benteng Kuto Besak'},
  {'id' : 5, 'foto':'/images/SungaiMusi.jpg', 'nama' : 'Paket Palembang City Tour', 'harga' : 2500000, 'durasi' : '2 hari', 
    'deskripsi' : 'Musi Tour, Ampera, Monpera, JSC, dan beberapa mall di Palembang'},
  {'id' : 6, 'foto':'/images/Museum.jpg', 'nama' : 'Paket Free and Easy Palembang Tour', 'harga' : 4500000, 'durasi' : '3 hari 2 malam', 
    'deskripsi' : 'Pulau Kemaro - Jembatan Ampera - Museum SMB II - Benteng Kuto Besak - All You Can Eat Concept - Hotel Bintang 5 - Tour Guide'},
  {'id' : 7, 'foto':'/images/GWalk.jpg', 'nama' : 'Paket Eksplorasi Palembang', 'harga' : 4000000, 'durasi' : '3 hari 2 malam', 
    'deskripsi' : 'GWalk - Jakabaring - Benteng Kuto Besak - Museum SMB II - Museum AlQuran - Masjid Cheng Ho - Pulau Kemaro - Pagoda - All You Can Eat Concept - Hotel Bintang 4 - Tour Guide'},
  {'id' : 8, 'foto':'/images/TamanKambangIwak.jpg', 'nama' : 'Paket Wisata Ceria Palembang', 'harga' : 3000000, 'durasi' : '3 hari 2 malam', 
    'deskripsi' : 'Taman Kambang Iwak - Kampung Kapitan - Bukit Siguntang - Punti Kayu - GWalk - Sekanak Side Walk'},
  {'id' : 9, 'foto':'/images/Amanzi.jpg', 'nama' : 'Paket Wisata dan Kuliner Palembang', 'harga' : 3500000, 'durasi' : '3 hari 2 malam', 
    'deskripsi' : 'OPI Waterfun - Amanzi Waterpark - Palembang Birdpark - Pempek Beringin - Martabak HAR - Mie Celor 26 Ilir - Pempek Pak Raden - Pindang Sri Melayu - RiverSide'},
]

router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', {
    title: 'Paket Wisata', 
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { 
    title: 'Form Pemesanan Paket',
    listpaketwisata: listpaketwisata
  });
});

router.post('/orderdetail', function(req, res, next) {
  const { nama, email, selectPaketWisata, jumlah, hargaTotal } = req.body;
  res.render('orderdetail', { 
    title: 'Detail Pemesanan Paket', 
    orderDetails: { nama, email, selectPaketWisata, jumlah, hargaTotal } ,
    listpaketwisata: listpaketwisata
  });
});

module.exports = router;