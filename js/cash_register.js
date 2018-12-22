const register = calculatorModule();
// get numbers to show on display and load

const display = document.getElementById('total');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const clear = document.querySelector('#clear');

// get numbers to clear

for (let i = 0; i < nums.length; i++){
    nums[i].addEventListener('click', (e) => {
        register.load(e.target.textContent);
        display.textContent = register.getTotal();
    });
}

for (let i = 0; i <nums.length; i++){
    ops[i].addEventListener('click', (e) => {
        register.load(e.target.textContent);
        display.textContent = register.getTotal();
    });
}

clear.addEventListener('click', () => {
    register.clearDisplay();
    display.textContent = register.getTotal();
});


