
function Add() {
    let num1 = parseFloat(document.querySelector("#number1").value);
    let num2 = parseFloat(document.querySelector("#number2").value);

    let resultShow = num1 + num2;
    document.querySelector("#txt").value = ` The result of Addition is : ${resultShow}`

    if (num1 !== num1 || num2 !== num2) {
        document.querySelector("#txt").value = `Please enter  numbers`;
    }

}

function Sub() {
    let num1 = parseFloat(document.querySelector("#number1").value);
    let num2 = parseFloat(document.querySelector("#number2").value);

    let resultShow = num1 - num2;
    document.querySelector("#txt").value = ` The result of Subtraction is : ${resultShow}`

    if (num1 !== num1 || num2 !== num2) {
        document.querySelector("#txt").value = `Please enter  numbers`;
    }

}

function Multiply() {
    let num1 = parseFloat(document.querySelector("#number1").value);
    let num2 = parseFloat(document.querySelector("#number2").value);

    let resultShow = num1 * num2;
    document.querySelector("#txt").value = `The result of Multiplication is : ${resultShow}`

    if (num1 !== num1 || num2 !== num2) {
        document.querySelector("#txt").value = `Please enter  numbers`;
    }
}

function Divide() {
    let num1 = parseFloat(document.querySelector("#number1").value);
    let num2 = parseFloat(document.querySelector("#number2").value);

    if (num1 === 0 || num2 === 0) {
        document.querySelector("#txt").value = `${num1} is not divisible by ${num2}`;
    } else if (num1 !== num1 || num2 !== num2) {
        document.querySelector("#txt").value = `Please enter  numbers`;
    } else {
        let resultShow = num1 / num2;
        document.querySelector("#txt").value = `The result of Division is : ${resultShow}`;
    }
}




