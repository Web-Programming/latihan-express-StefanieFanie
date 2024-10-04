var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

// router.get('/paketwisata', function(req, res, next) {
//   res.render('paketwisata', { title: 'Paket Wisata' });
// });

router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'Wisata Pulau Kemaro', 'harga' : 500000},
    {'nama' : 'Wisata Punti Kayu', 'harga' : 250000},
    {'nama' : 'Wisata Jakabaring', 'harga' : 100000},
  ]
  res.render('paketwisata', {
    title: 'Paket Wisata', 
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
  const { nama, email, selectPaketWisata, jumlah, hargaTotal } = req.body;
  res.render('orderdetail', { 
    title: 'Detail Pemesanan Paket', 
    orderDetails: { nama, email, selectPaketWisata, jumlah, hargaTotal } 
  });
});

module.exports = router;