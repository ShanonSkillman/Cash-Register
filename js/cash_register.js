var myRegister = calculatorModule();
var results = '';
var bal = 0;

//Answer will be Displayed//
const display = document.getElementById("display");

//Number Buttons//
document.getElementById("zero").addEventListener('click', number0);
function number0() {
    results += '0';
    display.innerHTML = results;
}

document.getElementById("double0").addEventListener('click', number00);
function number00() {
    results += '00';
    display.innerHTML = results;
}

document.getElementById("one").addEventListener('click', number1);
function number1() {
  results += '1';
  display.innerHTML = results;
}

document.getElementById("two").addEventListener('click', number2);
function number2() {
    results += '2';
    display.innerHTML = results;

}

document.getElementById("three").addEventListener('click', number3);
function number3() {
    results += '3';
    display.innerHTML = results;
}

document.getElementById("four").addEventListener('click', number4);
function number4() {
    results += '4';
    display.innerHTML = results;
}

document.getElementById("five").addEventListener('click', number5);
function number5() {
    results += '5';
    display.innerHTML = results;
}

document.getElementById("six").addEventListener('click', number6);
function number6() {
    results += '6';
    display.innerHTML = results;
}

document.getElementById("seven").addEventListener('click', number7);
function number7() {
    results += '7';
    display.innerHTML = results;
}

document.getElementById("eight").addEventListener('click', number8);
function number8() {
    results += '8';
    display.innerHTML = results;
}

document.getElementById("nine").addEventListener('click', number9);
function number9() {
    results += '9';
    display.innerHTML = results;
}

document.getElementById("decimal").addEventListener('click', decimal);
function decimal() {
    results += '.';
    display.innerHTML = results;
}

//Operator Buttons//
document.getElementById("addition").addEventListener('click', addNums);
function addNums() {
  results += '+';
  display.innerHTML = results;
}

document.getElementById("subtract").addEventListener('click', subNums);
function subNums() {
    results += '-';
    display.innerHTML = results;
}

document.getElementById("multiply").addEventListener('click', multNums);
function multNums() {
    results += '*';
    display.innerHTML = results;
}

document.getElementById("divide").addEventListener('click', divNums);
function divNums() {
    results += "/";
    display.innerHTML = results;
}

//Execution//
equals = document.getElementById("equals");
equals.addEventListener('click', answer);
function answer() {
    console.log(display.innerHTML)
display.innerHTML = eval(display.innerHTML)
results = display.innerHTML
}

//Clear Button//
document.getElementById("clear").addEventListener('click', clear);
clear.addEventListener('click', clearDisplay);
    function clearDisplay() {
        if(display.innerHTML === '0'){
            bal = 0
        }
    myRegister.clearMemory();
    display.innerHTML = '';
    results = '';
    }

//Get Balance//
document.getElementById("getBalance").addEventListener('click', getBalance);
getBalance.addEventListener('click', getBal);
    function getBal(){
   display.innerHTML = bal
    }

//Deposit Cash//
document.getElementById("depositCash").addEventListener('click', depositCash);
depositCash.addEventListener('click', depositCashMonay);
    function depositCashMonay(){
    answer()
    bal += parseFloat(display.innerHTML)
    }

//Withdraw Cash//
document.getElementById("withdrawCash").addEventListener('click', withdrawCash);
withdrawCash.addEventListener('click', withdrawCashMonay);
    function withdrawCashMonay(){
    answer()
    bal -= parseFloat(display.innerHTML)
    }