// Data siswa
const dataSiswa = [
    { nama: "Azzam", nilai: 85 },
    { nama: "Azril", nilai: 65 },
    { nama: "Bima", nilai: 90 },
    { nama: "Alip", nilai: 70 },
    { nama: "Brili", nilai: 85 },
];

let totalNilai = 0;
let siswaTertinggi = dataSiswa[0];

dataSiswa.forEach((siswa) => {
    let grade;
    let status;

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
const rataRata = totalNilai / dataSiswa.length;
console.log("Rata-rata kelas: " + rataRata);

function periksa50(a, b) {
    return a === 50 || b === 50 || a + b === 50;
}

document.writeln(periksa50(50, 50) + "<br>");
document.writeln(periksa50(20, 30) + "<br>");
document.writeln(periksa50(20, 20) + "<br>");
document.writeln(periksa50(50, 10) + "<br>");