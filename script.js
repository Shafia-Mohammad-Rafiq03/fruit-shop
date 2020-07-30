// let btnAdd = document.querySelector('#add');
// let btnSubtract = document.querySelector('#subtract');
// let spanQty = document.querySelector('#qty')

let enterBudget = 0;
let total = 0;
let Balance = enterBudget - total;
let quantityOfMango = 0;
let priceOfMango = 10;
let quantityOfKiwi = 0;
let priceOfKiwi = 20;
let quantityOfApple = 0;
let priceOfApple = 30;




// product-1 Mango 

function lessMango() {
    if (quantityOfMango > 0) --quantityOfMango;
    document.getElementById("qtyOfMango").innerHTML = quantityOfMango;
    calculateTotalOfMango();
    calculateBalance();
}

function addMango() {
    ++quantityOfMango;
    document.getElementById("qtyOfMango").innerHTML = quantityOfMango;
    calculateTotalOfMango();
    calculateBalance();
}




// product-2 Kiwi

function lessKiwi() {
    if (quantityOfKiwi > 0) --quantityOfKiwi;
    document.getElementById("qtyOfKiwi").innerHTML = quantityOfKiwi;
    calculateTotalOfKiwi();
    calculateBalance();
}

function addKiwi() {
    ++quantityOfKiwi;
    document.getElementById("qtyOfKiwi").innerHTML = quantityOfKiwi;
    calculateTotalOfKiwi();
    calculateBalance();
}




// product-3 Apple

function lessApple() {
    if (quantityOfApple > 0) --quantityOfApple;
    document.getElementById("qtyOfApple").innerHTML = quantityOfApple;
    calculateTotalOfApple();
    calculateBalance();
}

function addApple() {
    ++quantityOfApple;
    document.getElementById("qtyOfApple").innerHTML = quantityOfApple;
    calculateTotalOfApple();
    calculateBalance();
}