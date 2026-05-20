// 1. DATA SISWA
var dataSiswa = [
    { nama: "Azzam", nilai: 85 },
    { nama: "Azril", nilai: 65 },
    { nama: "Bima", nilai: 90 },
    { nama: "Alip", nilai: 70 },
    { nama: "Brili", nilai: 85 },
];

var totalNilai = 0;
var siswaTertinggi = dataSiswa[0];

// menampilkan setuap data siswa menggunakan document.writeln
dataSiswa.forEach(function (siswa) {
    var grade;
    var status;

    if (siswa.nilai >= 80) {
        grade = "A";
        status = "Lulus";
    } else if (siswa.nilai >= 70) {
        grade = "B";
        status = "Lulus";
    } else {
        grade = "C";
        status = "Tidak Lulus";
    }

    document.writeln("Nama: " + siswa.nama + " - Nilai: " + siswa.nilai + " - Grade: " + grade + " - Status: " + status + "<br>");

    totalNilai += siswa.nilai;

    if (siswa.nilai > siswaTertinggi.nilai) {
        siswaTertinggi = siswa;
    }
});

console.log("Siswa dengan nilai tertinggi: " + siswaTertinggi.nama + " - Nilai: " + siswaTertinggi.nilai);
var rataRata = totalNilai / dataSiswa.length;
console.log("Rata-rata kelas: " + rataRata);

// TRUE FALSE
function periksa50(a, b) {
    return a === 50 || b === 50 || a + b === 50;
}

document.writeln("<br>Cek angka 50:<br>");
document.writeln(periksa50(50, 50) + "<br>");
document.writeln(periksa50(20, 30) + "<br>");
document.writeln(periksa50(20, 20) + "<br>");
document.writeln(periksa50(50, 10) + "<br>");


// --- 2. PERKALIAN, PEMBAGIAN & TANGGAL ---
// menggunakan window.onload agar kode ini berjalan setelah halaman HTML di refresh
window.onload = function () {
    // logic Tanggal
    var sekarang = new Date();
    var dd = sekarang.getDate();
    var mm = sekarang.getMonth() + 1;
    var yyyy = sekarang.getFullYear();

    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    var format1 = mm + '-' + dd + '-' + yyyy;
    var format2 = mm + '/' + dd + '/' + yyyy;
    var format3 = dd + '-' + mm + '-' + yyyy;
    var format4 = dd + '/' + mm + '/' + yyyy;

    // tampilkan tanggal di layar (mencari div dateOutput)
    var outputTanggal = format1 + "<br>" + format2 + "<br>" + format3 + "<br>" + format4;
    document.getElementById("dateOutput").innerHTML = outputTanggal;

    // cetak juga ke console
    console.log(format1);
    console.log(format2);
    console.log(format3);
    console.log(format4);
};

// fungsi perkalian (bisa dipanggil kapan saja asal tombol diklik)
function multiply() {
    var angka1 = document.getElementById("num1").value;
    var angka2 = document.getElementById("num2").value;
    var hasil = angka1 * angka2;
    document.getElementById("result").innerText = hasil;
}

// fungsi Pembagian
function divide() {
    var angka1 = document.getElementById("num1").value;
    var angka2 = document.getElementById("num2").value;
    if (angka2 == 0) {
        document.getElementById("result").innerText = "Tidak bisa bagi 0";
        return;
    }
    var hasil = angka1 / angka2;
    document.getElementById("result").innerText = hasil;
}