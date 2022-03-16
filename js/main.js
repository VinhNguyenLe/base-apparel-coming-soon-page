const input = document.querySelector('input')
const btn = document.querySelector('.button')
const warningMsg = document.querySelector('.form-message')
const warningIcon = document.querySelector('.error__img')
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function showWaring(){
     if(input.value.match(regex)){
        warningMsg.innerHTML = 'The email address you entered is valid!'
        warningMsg.classList.add('show-success')
        warningIcon.classList.remove('show')
     } else {
        warningMsg.classList.add('show')
        warningIcon.classList.add('show')
     }
}

btn.addEventListener('click', showWaring)