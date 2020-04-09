function ubahHuruf(kata) {
    // you can only write your code here!
    var hurufKecil='abcdefghijklmnopqrstuvwxyz';
    var hurufBesar='ABCDEFGHIJKLMNOPQRSSTUVWXYZ';
    var kataBaru='';
    for(i=0;i<kata.length; i++){
        for(j=0; j<hurufKecil.length; j++){
            if(hurufBesar[j]===kata[i]){
                if(hurufBesar[hurufBesar.length-1]===kata[i]){
                    kataBaru+=hurufBesar[0];
                }else{
                    kataBaru+=hurufBesar[j+1];
                }
                break;
            } else if(hurufKecil[j]===kata[i]){
                if(hurufKecil[hurufKecil.length-1]===kata[i]){
                    kataBaru+=hurufKecil[0];
                }else{
                    kataBaru+=hurufKecil[j+1];
                }
                break;
            }
        }
    }
    return kataBaru;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu