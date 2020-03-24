/*NOMOR 1*/
var rows1=2; // input the number of rows

for (i=0;i<rows1;i++){
    console.log('*')
}


/*NOMOR 2*/
var output2="";
var rows2=2; // input the number of rows
for (var i=0; i<rows2; i++){
    for (var j=0; j<rows2; j++){
        output2+='*';
    }
    console.log(output2);
    output2="";
}

/*NOMOR 3*/
var rows3=2; // input the number of rows
var output1="";

for (var i=0; i<rows3; i++){
    for (var j=0; j<=i; j++){
        output1+='*';
        break;
    }
    console.log(output1);
}