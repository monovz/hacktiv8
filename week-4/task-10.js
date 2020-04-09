function changeMe(arr) {
    // you can only write your code here!
    for(var i=0; i<arr.length; i++){
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`)
        var temp={};
        temp.firstName=arr[i][0];
        temp.lastName=arr[i][1];
        temp.gender=arr[i][2];
        if(isNaN(arr[i][3]) || arr[i][3]>2019){
            temp.age='Invalid Birth Year';
        } else{
            temp.age=2019-arr[i][3]
        }
        console.log(temp);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""