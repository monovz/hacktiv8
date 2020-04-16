function changeVocals (str) {
    //code di sini
    var hurufKecil='abcdefghijklmnopqrstuvwxyz';
    var hurufBesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var arrStr=[];
    for(var i=0; i<str.length; i++){
        arrStr.push(str[i])
    }

    for(var i=0; i<arrStr.length; i++){
        for(var j=0; j<hurufKecil.length; j++){
            if((arrStr[i]=='a' || arrStr[i]=='i' || arrStr[i]=='u' || arrStr[i]=='e' || arrStr[i]=='o') && arrStr[i]==hurufKecil[j]){
                arrStr[i]=hurufKecil[j+1];
            } else if((arrStr[i]=='A' || arrStr[i]=='I' || arrStr[i]=='U' || arrStr[i]=='E' || arrStr[i]=='O') && arrStr[i]==hurufBesar[j]){
                arrStr[i]=hurufBesar[j+1];
            }
        }  
    }

    str='';
    for(var i=0; i<arrStr.length; i++){
        str+=arrStr[i];
    }

    return str;
  }

  function reverseWord (str) {
    //code di sini
    var strBaru='';
    for(var i=str.length-1; i>=0; i--){
        strBaru+=str[i]
    }

    return strBaru;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var hurufKecil='abcdefghijklmnopqrstuvwxyz';
    var hurufBesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var arrStr=[];
    for(var i=0; i<str.length; i++){
        arrStr.push(str[i])
    }

    for(var i=0; i<arrStr.length; i++){
        for(var j=0; j<hurufKecil.length; j++){
            if(arrStr[i]==hurufKecil[j]){
                arrStr[i]=hurufBesar[j];
            } else if(arrStr[i]==hurufBesar[j]){
                arrStr[i]=hurufKecil[j];
            }
        }  
    }

    str='';
    for(var i=0; i<arrStr.length; i++){
        str+=arrStr[i];
    }

    return str;
  }
  
  function removeSpaces (str) {
    //code di sini
    var hurufKecil='abcdefghijklmnopqrstuvwxyz';
    var hurufBesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var strBaru='';

    for(var i=0; i<str.length; i++){
      for(var j=0; j<hurufKecil.length; j++){
        if(hurufKecil[j]==str[i]){
          strBaru+=str[i];
        } if(hurufBesar[j]==str[i]){
          strBaru+=str[i];
        }
      }
    }
    
    return strBaru;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else{
      var ubahVokal= changeVocals (name);
      var balikKata= reverseWord (ubahVokal);
      var ubahUkuranHuruf= setLowerUpperCase (balikKata);
      var hapusSpasi= removeSpaces (ubahUkuranHuruf)

      return hapusSpasi;
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'