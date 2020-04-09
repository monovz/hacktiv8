function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang.length<1){
        return arrPenumpang
    } else{
        var final=[];
        for(var i=0; i<arrPenumpang.length; i++){
            var temp={};
            temp.penumpang=arrPenumpang[i][0];
            temp.naikDari=arrPenumpang[i][1];
            temp.tujuan=arrPenumpang[i][2];
            for(var j=0; j<rute.length; j++){
                if(temp.naikDari===rute[j]){
                    var tempDari=rute[j];
                    temp.bayar=0;
                } else if(tempDari===temp.naikDari && rute[j]!==temp.tujuan){
                    temp.bayar+=2000;
                } else if(tempDari===temp.naikDari && rute[j]===temp.tujuan){
                    temp.bayar+=2000;
                    break;
                }
            }
            final.push(temp);
        }
        return final
    }
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]