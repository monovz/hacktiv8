//input "hello world!"
function balikString(string){
    var balikString='';
    for (i=string.length-1; i>=0; i--){
        balikString+=string[i];
    }
    return balikString;
}
//output
console.log(balikString('hello world!'));
// "!dlrow olleh"
