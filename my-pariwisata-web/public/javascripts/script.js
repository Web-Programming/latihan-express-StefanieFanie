function hitungTotalHarga() {
    const selectPaketWisata = document.getElementById('selectPaketWisata').value;
    const hargaTotal = document.getElementById('hargaTotal');
    const hargaSatuan = document.getElementById('harga');
    const jumlah = document.getElementById('jumlah').value;

    let harga = 0;
    if (selectPaketWisata === 'paket1') {
        harga = 2700000;
    } else if (selectPaketWisata === 'paket2') {
        harga = 2500000;
    } else if (selectPaketWisata === 'paket3') {
        harga = 4500000;
    } else if (selectPaketWisata === 'paket4') {
        harga = 4000000;
    } else if (selectPaketWisata === 'paket5') {
        harga = 3000000;
    } else {
        harga = 3500000;
    }
    
    const totalHarga = harga * jumlah;
    hargaTotal.value = totalHarga;
    hargaSatuan.value = harga;
    document.getElementById('harga').innerText = `Harga Per Orang : Rp ${harga}`;
    document.getElementById('hargaTotal').innerText = `Total harga : Rp ${totalHarga}`;
}