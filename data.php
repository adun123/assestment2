<?php
// Koneksi ke database (ganti dengan informasi koneksi sesuai kebutuhan)
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "surat_rekomendasi_magang";

// Buat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Query untuk mengambil data
$sql = "SELECT 
            SuratRekomendasi.ID AS Surat_ID,
            Mahasiswa.Nama AS Mahasiswa_Nama,
            Mahasiswa.Major AS Mahasiswa_Jurusan,
            SuratRekomendasi.BahasaDocument AS Surat_Bahasa,
            SuratRekomendasi.Tujuan AS Surat_Tujuan,
            PenerimaSurat.NamaPerusahaan AS Perusahaan_Nama,
            PenerimaSurat.NamaDivisi AS Divisi_Nama,
            PenerimaSurat.NamaJabatan AS Jabatan_Nama,
            PenerimaSurat.AlamatPerusahaan AS Perusahaan_Alamat
        FROM 
            SuratRekomendasi
        JOIN 
            Mahasiswa ON SuratRekomendasi.NIM = Mahasiswa.NIM
        JOIN 
            PenerimaSurat ON SuratRekomendasi.ID = PenerimaSurat.ID";

$result = $conn->query($sql);

// Jika data ditemukan, konversi ke format JSON
if ($result->num_rows > 0) {
    $data = array();
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results";
}

// Tutup koneksi
$conn->close();
?>
