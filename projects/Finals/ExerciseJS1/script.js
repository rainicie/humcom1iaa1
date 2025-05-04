function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = document.getElementById("result");

    result.innerHTML = "";

    var sum = num1 + num2;
    result.innerHTML = "SUM: " + sum;
}
function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = document.getElementById("result");

    result.innerHTML = "";

    var difference = num1 - num2;
    result.innerHTML = "DIFFERENCE: " + difference;
}
function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = document.getElementById("result");

    result.innerHTML = "";

    var product = num1 * num2;
    result.innerHTML = "PRODUCT: " + product;
}
function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = document.getElementById("result");

    result.innerHTML = "";

    var quotient = num1 / num2;
    result.innerHTML = "QUOTIENT: " + quotient;
}