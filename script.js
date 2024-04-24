let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.ValueMax.length > inputNumber .maxLength) inputNumber.Value
        = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});