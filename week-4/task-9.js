function checkAB(num) {
    // you can only write your code here!
    var check=false;
    for(var i=0; i<num.length; i++){
        if(num[i]==='a' && num[i+4]==='b' || num[i]==='b' && num[i+4]==='a'){
            check=true;
            break;
        } else {continue;}
    }

    return check;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false