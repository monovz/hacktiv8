var tanggal=31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=13; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=1900; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
// var bulanBaru='';
if ( tanggal >=1 && tanggal <=31 && tahun >= 1900 && tahun <=2200 ){
    switch(bulan){
        case 1:   { console.log(`${tanggal} Januari ${tahun}`); break; }
        case 2:   { console.log(`${tanggal} Februari ${tahun}`); break; }
        case 3:   { console.log(`${tanggal} Maret ${tahun}`); break; }
        case 4:   { console.log(`${tanggal} April ${tahun}`); break; }
        case 5:   { console.log(`${tanggal} Mei ${tahun}`); break; }
        case 6:   { console.log(`${tanggal} Juni ${tahun}`); break; }
        case 7:   { console.log(`${tanggal} Juli ${tahun}`); break; }
        case 8:   { console.log(`${tanggal} Agustus ${tahun}`); break; }
        case 9:   { console.log(`${tanggal} September ${tahun}`); break; }
        case 10:   { console.log(`${tanggal} Oktober ${tahun}`); break; }
        case 11:   { console.log(`${tanggal} November ${tahun}`); break; }
        case 12:   { console.log(`${tanggal} Desember ${tahun}`); break; }
        default: {console.log('Masukkan tanggal antara 1 - 31, bulan antara 1 - 12, dan tahun antara 1900 - 2200');}
    }
}else {
    console.log('Masukkan tanggal antara 1 - 31, bulan antara 1 - 12, dan tahun antara 1900 - 2200')
}


// if ( tanggal >=1 && tanggal <=31 && tahun >= 1900 && tahun <=2200 && bulan >= 1 && bulan <= 12 ){
//     switch(bulan){
//         case 1:   {  bulanBaru='Januari'; break; }
//         case 2:   { bulanBaru='Februari'; break; }
//         case 3:   { bulanBaru= 'Maret'; break; }
//         case 4:   { bulanBaru= 'April'; break; }
//         case 5:   { bulanBaru= 'Mei'; break; }
//         case 6:   { bulanBaru= 'Juni'; break; }
//         case 7:   { bulanBaru= 'Juli'; break; }
//         case 8:   { bulanBaru= 'Agustus'; break; }
//         case 9:   { bulanBaru= 'September'; break; }
//         case 10:   { bulanBaru= 'Oktober'; break; }
//         case 11:   { bulanBaru= 'November'; break; }
//         case 12:   { bulanBaru= 'Desember'; break; }
//         default: {console.log('Masukkan tanggal antara 1 - 31, bulan antara 1 - 12, dan tahun antara 1900 - 2200');}
//     }
//     console.log(`${tanggal} ${bulanBaru} ${tahun}`)
// }else {
//     console.log('Masukkan tanggal antara 1 - 31, bulan antara 1 - 12, dan tahun antara 1900 - 2200')
// }