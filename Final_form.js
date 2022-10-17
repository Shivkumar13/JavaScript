const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

const getBackgroundColor = document.querySelector('');

getBackgroundColor.style.background = 'pink'

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all fields'

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
