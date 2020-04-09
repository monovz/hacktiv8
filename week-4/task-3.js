function cariMedian(arr) {
    // you can only write your code here!
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    var med=0;
    if(arr.length==1){
        med=arr[0]
    }else{
        if(arr.length%2!==0){
            med=arr[((arr.length+1)/2)-1];
        } else{
            med=(arr[(arr.length/2)-1]+arr[((arr.length/2)+1)-1])/2
        }
    }
    return med;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5