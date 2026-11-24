
// Mengambil formulir kontak
const contactForm = document.getElementById("contactForm");

// Menjalankan fungsi ketika formulir dikirim
contactForm.addEventListener("submit", function(event) {

    // Mencegah halaman dimuat ulang
    event.preventDefault();

    // Mengambil nilai dari formulir
    const nama = document.getElementById("name").value;

    // Menampilkan pesan pemberitahuan
    alert("Terima kasih, " + nama + "! Pesan Anda berhasil dikirim.");

    // Mengosongkan formulir
    contactForm.reset();

});