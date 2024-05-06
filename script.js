function submitForm() {
    // Mengambil nilai input dari form
    var nim = document.getElementById("nim").value;
    var bahasa = document.getElementById("bahasa").value;
    var tujuan = document.getElementById("tujuan").value;
    var perusahaan = document.getElementById("perusahaan").value;
    var divisi = document.getElementById("divisi").value;
    var jabatan = document.getElementById("jabatan").value;
    var alamat = document.getElementById("alamat").value;

    // Membuat objek data untuk dikirimkan ke server
    var data = {
        nim: nim,
        bahasa: bahasa,
        tujuan: tujuan,
        perusahaan: perusahaan,
        divisi: divisi,
        jabatan: jabatan,
        alamat: alamat
    };

    // Mengirim data ke server menggunakan AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Tampilkan pesan sukses atau error jika diperlukan
            alert(this.responseText);
            // Bersihkan form setelah pengiriman data berhasil
            document.getElementById("input-form").reset();
            // Refresh tampilan untuk menampilkan data terbaru
            fetchData();
        }
    };
    xmlhttp.open("POST", "insert_data.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
}

function fetchData() {
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
}

function displayData(data) {
    var table = "<table border='1'>";
    table += "<tr><th>NIM</th><th>Bahasa Dokumen</th><th>Tujuan</th><th>Nama Perusahaan</th><th>Divisi</th><th>Jabatan</th><th>Alamat Perusahaan</th></tr>";
    for (var i = 0; i < data.length; i++) {
        table += "<tr>";
        table += "<td>" + data[i].NIM + "</td>";
        table += "<td>" + data[i].BahasaDocument + "</td>";
        table += "<td>" + data[i].Tujuan + "</td>";
        table += "<td>" + data[i].NamaPerusahaan + "</td>";
        table += "<td>" + data[i].NamaDivisi + "</td>";
        table += "<td>" + data[i].NamaJabatan + "</td>";
        table += "<td>" + data[i].AlamatPerusahaan + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("data-table").innerHTML = table;
}

// Memanggil fetchData saat halaman dimuat
window.onload = fetchData;

function displayData(data) {
    var table = "<table border='1'>";
    table += "<tr><th>NIM</th><th>Bahasa Dokumen</th><th>Tujuan</th><th>Nama Perusahaan</th><th>Divisi</th><th>Jabatan</th><th>Alamat Perusahaan</th></tr>";
    for (var i = 0; i < data.length; i++) {
        table += "<tr>";
        table += "<td>" + data[i].NIM + "</td>";
        table += "<td>" + data[i].BahasaDocument + "</td>";
        table += "<td>" + data[i].Tujuan + "</td>";
        table += "<td>" + data[i].NamaPerusahaan + "</td>";
        table += "<td>" + data[i].NamaDivisi + "</td>";
        table += "<td>" + data[i].NamaJabatan + "</td>";
        table += "<td>" + data[i].AlamatPerusahaan + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("data-table").innerHTML = table;
}

