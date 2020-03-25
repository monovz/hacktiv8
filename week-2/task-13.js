function xo(str) {
    // you can only write your code here!
    let strX=0;
    let strO=0;
    let panjangStr=str.length;
    let i=0;
    while (i<panjangStr){
        if(str[i]==='x') {
            strX+=1;
        } else if(str[i]==='o'){
            strO+=1;
        }
        i++;
    }
    if(strX===strO){
        return true;
    } else if(strX!==strO){
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true