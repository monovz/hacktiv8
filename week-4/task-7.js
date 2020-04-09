function urutkanAbjad(str) {
    // you can only write your code here!
    var strArr=[]
    for (var i=0; i<str.length; i++){
        strArr.push(str[i])
        switch(strArr[i]){
            case 'a':   {strArr[i]=1; break;};
            case 'b':   {strArr[i]=2; break;};
            case 'c':   {strArr[i]=3; break;};
            case 'd':   {strArr[i]=4; break;};
            case 'e':   {strArr[i]=5; break;};
            case 'f':   {strArr[i]=6; break;};
            case 'g':   {strArr[i]=7; break;};
            case 'h':   {strArr[i]=8; break;};
            case 'i':   {strArr[i]=9; break;};
            case 'j':   {strArr[i]=10; break;};
            case 'k':   {strArr[i]=11; break;};
            case 'l':   {strArr[i]=12; break;};
            case 'm':   {strArr[i]=13; break;};
            case 'n':   {strArr[i]=14; break;};
            case 'o':   {strArr[i]=15; break;};
            case 'p':   {strArr[i]=16; break;};
            case 'q':   {strArr[i]=17; break;};
            case 'r':   {strArr[i]=18; break;};
            case 's':   {strArr[i]=19; break;};
            case 't':   {strArr[i]=20; break;};
            case 'u':   {strArr[i]=21; break;};
            case 'v':   {strArr[i]=22; break;};
            case 'w':   {strArr[i]=23; break;};
            case 'x':   {strArr[i]=24; break;};
            case 'y':   {strArr[i]=25; break;};
            case 'z':   {strArr[i]=26; break;};
        }
    }

    for(var i=0; i<strArr.length; i++){
        for(var j=0; j<strArr.length-1; j++){
            if(strArr[j]>strArr[j+1]){
                var temp= strArr[j];
                strArr[j]= strArr[j+1];
                strArr[j+1]= temp;
            }
        }
    }

    var strBaru='';
    for (var i=0; i<strArr.length; i++){
        switch(strArr[i]){
            case 1:   {strArr[i]='a'; break;};
            case 2:   {strArr[i]='b'; break;};
            case 3:   {strArr[i]='c'; break;};
            case 4:   {strArr[i]='d'; break;};
            case 5:   {strArr[i]='e'; break;};
            case 6:   {strArr[i]='f'; break;};
            case 7:   {strArr[i]='g'; break;};
            case 8:   {strArr[i]='h'; break;};
            case 9:   {strArr[i]='i'; break;};
            case 10:   {strArr[i]='j'; break;};
            case 11:   {strArr[i]='k'; break;};
            case 12:   {strArr[i]='l'; break;};
            case 13:   {strArr[i]='m'; break;};
            case 14:   {strArr[i]='n'; break;};
            case 15:   {strArr[i]='o'; break;};
            case 16:   {strArr[i]='p'; break;};
            case 17:   {strArr[i]='q'; break;};
            case 18:   {strArr[i]='r'; break;};
            case 19:   {strArr[i]='s'; break;};
            case 20:   {strArr[i]='t'; break;};
            case 21:   {strArr[i]='u'; break;};
            case 22:   {strArr[i]='v'; break;};
            case 23:   {strArr[i]='w'; break;};
            case 24:   {strArr[i]='x'; break;};
            case 25:   {strArr[i]='y'; break;};
            case 26:   {strArr[i]='z'; break;};
        }

        strBaru+= strArr[i];
    }

    return strBaru;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'

