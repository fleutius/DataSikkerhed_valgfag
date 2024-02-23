
var EncryptBtn = document.getElementById("Encrypt");
var EncryptedTxt = document.getElementById("EncryptResult")

var DecryptBtn; 
var EncryptedTxt;
var DecryptedTxt;



EncryptBtn.onclick = function EncryptCaesar(){
    inputarea = document.getElementById("Inbox");
    const alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","i","v","w","x","y","z"];
    const shiftnr = 3;
    var StringResult = "";
        for (i = 0; i<inputarea.value.length; i++){
            var CharCipher;
                if (inputarea.value[i] != " "){
                var a = inputarea.value[i];
                console.log(a.value)
                var CharStart = inputarea.value[i];
                var x = alfabet.indexOf(CharStart);
                var y = x + 3
                CharCipher = alfabet[y];
                
            }    
            else {CharCipher = inputarea.value[i]}

            StringResult = StringResult + CharCipher
        } 
        
        EncryptedTxt.innerHTML = StringResult;
    
    
}


