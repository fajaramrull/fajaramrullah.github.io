var tombol = document.getElementById("tombol")
tombol.addEventListener("click", add);

document.getElementById("sortAss").addEventListener("click", Sort);

var i = 0;

arr = [];

function add(){
    document.getElementById("nomor").value;
    tampil1 = document.getElementById("nomor").value;
    
    
    // console.log(arr);
    var hasil = tampil1;

    NumberTampil = Number(hasil);
    arr.push(NumberTampil);
    document.getElementById("hasil").innerHTML = arr.join(" ");

    // var arr1 = arr;

    // document.getElementById("sortAss").innerHTML = document.write(arr1.sort());
}


function Sort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr1[j]){
            var temp = arr1[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    // var sorthasil = document.getElementById("sorthasil").innerHTML = arr;
 }

    

// function sortNumber(){
//     var sortAss = document.getElementById("sortAss");
//     var sortDes = document.getElementById("sortDes");
//     var hasil = document.getElementById("hasil");

//     sortAss = sort(hasil);

//     console.log(sortAss);
// }