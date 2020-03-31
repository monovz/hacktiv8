/*NOMOR 1*/
console.log('LOOPING PERTAMA');
var angka = 0
while (angka<20){
    angka+=2;
    console.log(`${angka} - I love coding`);
    if (angka==20){
        console.log('LOOPING KEDUA');
        while (angka>=2){
            console.log(`${angka} - I will become fullstack developer`);
            angka-=2;
        }break;
    }
}

/*NOMOR 2*/
console.log('LOOPING PERTAMA');
for (i=1;i<=20;i+=1){
    console.log(`${i} - I love coding`);
    if (i==20){
        console.log('LOOPING KEDUA');
        for (i;i>0;i-=1){
            console.log(`${i} - I will become fullstack developer`);
        }break;
    }
}

/*NOMOR 3*/
counter1 = 0
while (counter1<100){
    counter1++;
    if(counter1%2==0){
        console.log('GENAP')
    } else{console.log('GANJIL')}
}

counter2 = 1
while (counter2<=100){
    if(counter2%3==0){
        console.log(`${counter2} kelipatan 3`)
    } else{console.log('')};
    counter2+=2;
}

counter2 = 1
while (counter2<=100){
    if(counter2%6==0){
        console.log(`${counter2} kelipatan 6`)
    } else{console.log('')};
    counter2+=5;
}

counter2 = 1
while (counter2<=100){
    if(counter2%10==0){
        console.log(`${counter2} kelipatan 10`)
    } else{console.log('')};
    counter2+=9;
}

