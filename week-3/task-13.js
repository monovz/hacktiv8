function targetTerdekat(arr) {
    // you can only write your code here!
    var tmp='';
    var tmpO='';
    var tmpX='';
    var counter=0;

    for(var i=0;i<arr.length;i++){
        if(arr[i]=='o'){
            tmpO='o';
        } else if(arr[i]=='x'){
            tmpX='x';
        }
        
        if (arr[i]=='o' && tmp=='' || arr[i]=='x' && tmp==''){
            tmp=arr[i];
        } else if(arr[i]==' ' && tmp=='o'){
            counter+=1;
        } else if(arr[i]==' ' && tmp=='x'){
            counter+=1;
        } else if((arr[i]=='x' && tmp=='x') || (arr[i]=='o' && tmp=='o')){
            counter=0;
        } else if((arr[i]=='x' && tmp=='o') || (arr[i]=='o' && tmp=='x')){
            counter+=1;
            break;
        }
    }

    if(tmpO!=='o' || tmpX!=='x'){
        counter=0;
    }
    
    return counter;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2