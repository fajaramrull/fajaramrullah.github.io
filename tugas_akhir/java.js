function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nama != "" && email!="" && alamat !="") {
        alert("Pendaftaran Anda Telah Berhasil");
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}