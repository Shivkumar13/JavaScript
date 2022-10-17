//Loop through DOM
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


//Manipulation the DOM (DOM as in User interface here)
const ul = document.querySelector('.items');

//For Removing last child 
//ul.lastElementChild.remove()

ul.firstElementChild.textContent = 'Hello';

ul.children[1].innerText = 'Sherlock';

ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const any_var_btn = document.querySelector('.btn');
any_var_btn.style.background = 'Orange';

any_var_btn.addEventListener('click', (e) => {
        e.preventDefault(); //Prevent default action for submit button (click)
        console.log('click');
        console.log(e);
        console.log(e.target); //class.btn
        console.log(e.target.className); //btn

});


any_var_btn.addEventListener('click', (e) => {
   
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>';
});

any_var_btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').classList.add('bg-dark');

})
