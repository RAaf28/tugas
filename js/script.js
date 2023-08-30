
// greetings
window.onload = function() {
  const userName = prompt("Please insert your name:");
  
  if (userName === null || userName === "") {
    alert("Name is required. Please refresh the page and enter your name.");
  } else {
    alert(`Hello, ${userName}! Welcome to our website.`);
  }
  
document.getElementById('nama').innerHTML = userName 
};
// function replaceName(){
// let name = prompt('siapakah nama anda?', '')

// console.log(name)

// document.getElementById('nama').innerHTML = name 
// }

// document.getElementById('tombol').addEventListener('click', function(){
//  replaceName();
// })

// fungsi pesan
function validateAndDisplay() {
    const name = document.getElementById('name');
    const birthdate = document.getElementById('birthdate');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const birthdateError = document.getElementById('birthdate-error');
    const genderError = document.getElementById('gender-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    if (name.value === '') {
      nameError.textContent = 'Please enter a name.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    if (birthdate.value === '') {
      birthdateError.textContent = 'Please enter a birth date.';
      isValid = false;
    } else {
      birthdateError.textContent = '';
    }

    let selectedGender = false;
    for (const genderInput of genderInputs) {
      if (genderInput.checked) {
        selectedGender = true;
        break;
      }
    }

    if (!selectedGender) {
      genderError.textContent = 'Please select a gender.';
      isValid = false;
    } else {
      genderError.textContent = '';
    }

    if (message.value === '') {
      messageError.textContent = 'Please enter a message.';
      isValid = false;
    } else {
      messageError.textContent = '';
    }

    if (isValid) {
      displayAllInfo();
    }
  }

  function displayAllInfo() {
    const formData = new FormData(document.getElementById('user-form'));
    const summaryBox = document.getElementById('summary-box');
    let content = '<strong>Submitted Data:</strong><br>';

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();

    content += `<strong>Date and Time:</strong> ${formattedTime}<br>`;

    for (const [key, value] of formData.entries()) {
      content += `<strong>${key}:</strong> ${value}<br>`;
    }

    summaryBox.innerHTML = content;
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
}, 2800);