function pasanganTerbesar(num) {
    // you can only write your code here!
    var duaAngkaString='';
    var angkaArray=[];
    if(typeof num == 'number'){
        num=num.toString();
        if(num.length>1){
            for (var i=0;i<num.length;i++){
                duaAngkaString+=num[i];
                if(duaAngkaString.length==2){
                    duaAngkaString=Number(duaAngkaString);
                    angkaArray.push(duaAngkaString);
                    duaAngkaString=num[i]
                }
            }
        } else if(num.length=1){
            angkaArray.push(num);
        }

        var largest;
        largest=angkaArray[0];
        for (i=0;i<angkaArray.length;i++){
            if (angkaArray[i]>largest){
                largest=angkaArray[i];
            }
        }

        return largest;
    }else {return 'Masukkan angkanya!'}
  }
  
  // TEST CASES
  console.log(pasanganTerbesar());
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99