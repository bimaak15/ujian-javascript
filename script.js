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

// menampilkan setiap data siswa
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

    // pakai Tailwind dikit biar rapi di dalam list
    var colorClass = status === "Lulus" ? "text-green-600" : "text-red-600";
    document.writeln("<div class='py-1 border-b border-gray-100 last:border-0'>" +
        "<strong>" + siswa.nama + "</strong> &raquo; " +
        "Nilai: " + siswa.nilai + " | " +
        "Grade: <span class='font-bold'>" + grade + "</span> | " +
        "Status: <span class='" + colorClass + "'>" + status + "</span>" +
        "</div>");

    totalNilai += siswa.nilai;

    if (siswa.nilai > siswaTertinggi.nilai) {
        siswaTertinggi = siswa;
    }
});

// Menampilkan info tambahan di console
console.log("Siswa tertinggi: " + siswaTertinggi.nama + " (" + siswaTertinggi.nilai + ")");
var rataRata = totalNilai / dataSiswa.length;
console.log("Rata-rata: " + rataRata);

// TRUE FALSE (Cek angka 50)
function periksa50(a, b) {
    return a === 50 || b === 50 || (a + b === 50);
}

document.writeln("<div class='mt-4 pt-4 border-t border-gray-300 font-bold text-gray-700'>Cek angka 50 results:</div>");
document.writeln("<div class='font-mono text-xs text-blue-500'>" +
    "50, 50 -> " + periksa50(50, 50) + "<br>" +
    "20, 30 -> " + periksa50(20, 30) + "<br>" +
    "20, 20 -> " + periksa50(20, 20) + "<br>" +
    "50, 10 -> " + periksa50(50, 10) + "</div>");


// --- 2. PERKALIAN, PEMBAGIAN & TANGGAL ---
window.onload = function () {
    // ambil element untuk tanggal
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

    // tampilkan di ID dateOutput
    var outputTanggal =
        "Format 1: " + format1 + "<br>" +
        "Format 2: " + format2 + "<br>" +
        "Format 3: " + format3 + "<br>" +
        "Format 4: " + format4;

    document.getElementById("dateOutput").innerHTML = outputTanggal;
};

// fungsi perkalian
function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var res = num1 * num2;
    document.getElementById("result").innerText = res;
}

// fungsi pembagian
function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num2 == 0) {
        document.getElementById("result").innerText = "Gak bisa bagi nol!";
        return;
    }
    var res = num1 / num2;
    document.getElementById("result").innerText = res;
}