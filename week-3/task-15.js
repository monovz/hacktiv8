function groupAnimals(animals) {
    // you can only write your code here!
    //CHANGE TO BE LOWERCASE
    for(var i=0; i<animals.length; i++){
        animals[i]=animals[i].toLowerCase()
    }

    //SORTING
    for (var i=0; i<animals.length; i++){
        for (var j=0; j<animals.length-1;j++){
            if(animals[j][0]>animals[j+1][0]){
                var temp=animals[j];
                animals[j]=animals[j+1];
                animals[j+1]=temp;
            }
        }
    }

    var arr=[animals[0]];
    var newArr=[];
    for (var i=0; i<animals.length-1; i++){
        arr.push(animals[i]);
        //LOOPING FOR CONDITIONING THE FIRST ARRAY
        for(var j=0;j<arr.length-1;j++){
            if(arr[j]==arr[j+1] || arr[j][0]!==arr[j+1][0]){
                arr.pop();
            } else if(arr[j]!==animals[j+1]){
                continue;
            }            
        }

        //CONDITIONING THE ARRAY
        if(animals[i][0]==animals[i+1][0]){
            arr.push(animals[i+1]);
            
        } else if(animals[i][0]!==animals[i+1][0]){
            newArr.push(arr);
            arr=[]
        }
    }

    //CONDITIONING FOR THE LAST ARRAY
    if(animals[animals.length-1][0]==animals[animals.length-2][0]){
        newArr.push(arr);
    } else if(animals[animals.length-1][0]!==animals[animals.length-2][0]){
        arr.push(animals[animals.length-1])
        newArr.push(arr);
    }

    return newArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


