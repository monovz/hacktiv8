var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    //  -----------------------1. USE SPLICE------------------------------
    input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4,2, "Pria", "SMA Internasional Metro");
    console.log(input);
    
    //  -----------------------2. SPLIT AND CALL MONTH------------------------------
    var lahirSplit=input[3].split('/');
    var bulan=lahirSplit[1];
    switch(bulan){
        case '01':   {console.log('Januari'); break;}
        case '02':   {console.log('Februari'); break; }
        case '03':   {console.log('Maret') ; break; }
        case '04':   {console.log('April'); break; }
        case '05':   {console.log('Mei') ; break; }
        case '06':   {console.log('Juni') ; break; }
        case '07':   {console.log('Juli'); break; }
        case '08':   {console.log('Agustus'); break; }
        case '09':   {console.log('September'); break; }
        case '10':   {console.log('Oktober'); break; }
        case '11':   {console.log('November'); break; }
        case '12':   {console.log('Desember'); break; }
    }

    //  -----------------------3. DESCENDING SORT------------------------------
    var lahir=[];
    for(i=0; i<lahirSplit.length; i++){
        lahir.push(lahirSplit[i]);
        lahir[i]=Number(lahir[i]);
    }

    for(i=0; i<lahir.length; i++){
        for(j=0; j<lahir.length-1; j++){
            if(lahir[j]<lahir[j+1]){
                var temp=lahir[j];
                lahir[j]=lahir[j+1];
                lahir[j+1]=temp;
            }
        }
    }

    for(i=0; i<lahir.length; i++){
        if(lahir[i]<10){
            lahir[i]='0'+lahir[i];
        }
        lahir[i]=lahir[i].toString();
    }
    console.log(lahir);

    //  -----------------------4. JOIN WITH '-'------------------------------
    console.log(lahirSplit.join('-'))

    //  -----------------------5. SET MAXIMUM CHAR FOR NAME WITH SLICE------------------------------
    var nama=input[1];
    nama=nama.slice(0,15);
    console.log(nama);
}

dataHandling2(input);
