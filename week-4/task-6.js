function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var pengali=[];
  for(var i=0; i<=angka; i++ ){
      for(var j=angka; j>=0; j--){
          if(i*j==angka){
              var pengaliSatu=i.toString()
              pengali.push(pengaliSatu+j);
          }
      }
  }

  var smallest=pengali[0].length;
  for(var i=0; i<pengali.length; i++){
      if(smallest > pengali[i].length){
          smallest=pengali[i].length;
      }
  }

  return smallest;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(0)); // 2