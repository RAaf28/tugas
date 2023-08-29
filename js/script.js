function replaceName(){


let name = prompt('siapakah nama anda?', '')

console.log(name)

document.getElementById('name').innerHTML = name 
}

document.getElementById('tombol').addEventListener('click', function(){
 replaceName();
})

let nameInput= document.getElementById('nameInput')

document.getElementById('kirim').addEventListener('click', function() {
    const nama = nameInput.value

    if(name == '') {
        document.getElementById('error-name').innerHTML= 'nama tidak boleh kosong'
    } else{

    document.getElementById('name').innerHTML= nama
}   
})

function validateForm(){
   const name = document.forms['message-form']['full-name'].value;
   const birthDate = document.forms['message-form']['birth-date'].value;
   const gender = document.forms['message-form']['gender'].value;
   const messages = document.forms['message-form']['messages'].value;

   if (name == '' || gender=='' || messages=='') {
    alert("tidak boleh ada yang kosong");
    return false;
   }

   setSenderUI(name, birthDate, gender, messages);

   return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById('sender-full-name').innerHTML= name;
    document.getElementById('sender-birth-date').innerHTML= birthDate;
    document.getElementById('sender-gender').innerHTML= gender;
    document.getElementById('sender-messages').innerHTML= messages;
}

var slideIndex=1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('img-slideshow');
    if (n > x.length) slideIndex = 1;
    else if (n < 1) slideIndex = x.length;
    for (i = 0; i < x.length; i ++) {
        x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';   
}

setInterval ( () => {
    plusDivs(1);
}, 1000);