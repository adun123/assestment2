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