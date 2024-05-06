
    // Panggil AJAX untuk mengambil data JSON dari server
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Proses data JSON yang diterima
            var data = JSON.parse(this.responseText);
            // Lakukan sesuatu dengan data, misalnya tampilkan dalam tabel
            displayData(data);
        }
    };
    xmlhttp.open("GET", "get_data.php", true);
    xmlhttp.send();

    // Fungsi untuk menampilkan data dalam tabel HTML
    function displayData(data) {
        var table = "<table border='1'>";
        table += "<tr><th>Surat ID</th><th>Nama Mahasiswa</th><th>Jurusan</th><th>Bahasa Dokumen</th><th>Tujuan</th><th>Nama Perusahaan</th><th>Divisi</th><th>Jabatan</th><th>Alamat Perusahaan</th><th>Aksi</th></tr>";
        for (var i = 0; i < data.length; i++) {
            table += "<tr>";
            table += "<td>" + data[i].Surat_ID + "</td>";
            table += "<td>" + data[i].Mahasiswa_Nama + "</td>";
            table += "<td>" + data[i].Mahasiswa_Jurusan + "</td>";
            table += "<td>" + data[i].Surat_Bahasa + "</td>";
            table += "<td>" + data[i].Surat_Tujuan + "</td>";
            table += "<td>" + data[i].Perusahaan_Nama + "</td>";
            table += "<td>" + data[i].Divisi_Nama + "</td>";
            table += "<td>" + data[i].Jabatan_Nama + "</td>";
            table += "<td>" + data[i].Perusahaan_Alamat + "</td>";
            table += "<td><button onclick='deleteData(" + data[i].Surat_ID + ")'>Hapus</button></td>";
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById("data-table").innerHTML = table;
    }

    // Fungsi untuk menghapus data dengan AJAX
    function deleteData(id) {
        if (confirm("Apakah Anda yakin ingin menghapus data?")) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Tampilkan pesan sukses atau error jika diperlukan
                    alert(this.responseText);
                    // Refresh tampilan setelah menghapus data
                    window.location.reload();
                }
            };
            xmlhttp.open("GET", "delete_data.php?id=" + id, true);
            xmlhttp.send();
        }
    }

    // Fungsi untuk menambahkan data baru
function addData() {
    var nama = document.getElementById("nama").value;
    var jurusan = document.getElementById("jurusan").value;
    var bahasa = document.getElementById("bahasa").value;
    var tujuan = document.getElementById("tujuan").value;
    var perusahaan = document.getElementById("perusahaan").value;
    var divisi = document.getElementById("divisi").value;
    var jabatan = document.getElementById("jabatan").value;
    var alamat = document.getElementById("alamat").value;

    // Validasi input
    if (nama === "" || jurusan === "" || bahasa === "" || tujuan === "" || perusahaan === "" || divisi === "" || jabatan === "" || alamat === "") {
        alert("Semua kolom input harus diisi!");
        return;
    }

    // Data yang akan dikirim dalam format JSON
    var data = {
        nama: nama,
        jurusan: jurusan,
        bahasa: bahasa,
        tujuan: tujuan,
        perusahaan: perusahaan,
        divisi: divisi,
        jabatan: jabatan,
        alamat: alamat
    };

    // Mengirim data baru ke server menggunakan AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Tampilkan pesan sukses atau error jika diperlukan
            alert(this.responseText);
            // Refresh tampilan setelah menambahkan data
            window.location.reload();
        }
    };
    xmlhttp.open("POST", "add_data.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
}
