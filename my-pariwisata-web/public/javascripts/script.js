function hitungTotalHarga() {
    const selectPaketWisata = document.getElementById('selectPaketWisata');
    const selectedOption = selectPaketWisata.options[selectPaketWisata.selectedIndex];
    const harga = parseInt(selectedOption.getAttribute('data-harga'));
    const jumlah = parseInt(document.getElementById('jumlah').value, 10);

    const hargaSatuan = document.getElementById('harga');
    const totalHarga = harga * jumlah;
    hargaSatuan.value = harga;
    hargaTotal.value = totalHarga;
    document.getElementById('harga').innerText = `Harga Per Orang : Rp ${harga}`;
    document.getElementById('hargaTotal').innerText = `Total harga : Rp ${totalHarga}`;
}

function toggleInfo(element) {
    const informasi = element.nextElementSibling;
    if (informasi.style.display === "none") {
        informasi.style.display = "block";
    } else {
        informasi.style.display = "none";
    }
}