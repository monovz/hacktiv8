function cariModus(arr) {
    if(arr.length<=1){
        if(arr.length!==1){
            return '';
        }
        return arr[0];
    } else{
        //SORTING
        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr.length-1; j++){
                if(arr[j]>arr[j+1]){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }

        //COUNT DIFFERENT NUMBERS
        var angkaArr=[];
        for (var i=0; i<arr.length; i++){
            angkaArr.push(arr[i]);
            for(var j=0;j<angkaArr.length-1;j++){
                if(angkaArr[j]==angkaArr[j+1]){
                    angkaArr.length-=1;
                }        
            }
        }

        //FIND THE MODE
        var angkaSekarang=arr[0];
        var counterSekarang=1;
        var angkaTerbesar=arr[0];
        var counterTerbesar=1;
        
        for(var i=1; i<=arr.length; i++){
            if(arr[i-1]!==arr[i]){
                if(counterSekarang > counterTerbesar){
                    counterTerbesar=counterSekarang;
                    angkaTerbesar=angkaSekarang;
                }

                counterSekarang=0;
                angkaSekarang=arr[i];
            }

            counterSekarang++;
        }

        if(counterSekarang>counterTerbesar){
            angkaTerbesar=angkaSekarang;
        }

        if(counterTerbesar < 2 || angkaArr.length < 2){
            return -1;
        } else{
            return angkaTerbesar;
        }
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
