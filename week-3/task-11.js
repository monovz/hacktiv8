function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var beda1=arr[1]-arr[0];
    for (var i=0;i<arr.length-1;i++){
        var beda2=0;
        beda2=arr[i+1]-arr[i];
        if(beda2!==beda1){
            break;
        }
    }

    if(beda2===beda1){
        return true;
    }else {return false;}
  }
  
//   TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false