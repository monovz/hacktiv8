function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var jumlahKata = 0;
    if(kalimat){
        kalimat=kalimat.split(" ")
        for (var i=0; i<kalimat.length;i++){
            jumlahKata++;
            }
        return jumlahKata;
    }else {return jumlahKata;}
  }
  
//   TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5