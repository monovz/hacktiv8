function konversiMenit(menit) {
    // you can only write your code here!
    let waktuDetik=0;
    let waktuMenit=0;
    while (menit>0){
        waktuDetik+=1;
        if (waktuDetik==60){
            waktuDetik=0;
            waktuMenit+=1;
        }
        menit--;
    }
    if (waktuDetik<10){
        waktuDetik="0" + waktuDetik;
    }
    menitDetik=`${waktuMenit}:${waktuDetik}`
    return menitDetik;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00