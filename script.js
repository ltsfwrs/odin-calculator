let displayValue = "0"
let newestNumber = 0
let newestOperator = ""
let operationArray = []
let operationArrayIndex = 0
let lastPressWasOperator = false
let interimResult = 0

let operate = function (op, a, b) {
    if (op === "+") {
        return (a + b)
    }
    if (op === "-") {
        return (a - b)
    }
    if (op === "*") {
        return a * b
    }
    if (op === "/") {
        return a / b
    }
}

const display = document.getElementById('display');

const populateDisplay = function (symbol) {
    if (display.innerHTML === "0") {
        displayValue = ""
        console.log("Cleared default zero")
    }
    displayValue += symbol
    display.innerHTML = displayValue
}

const clearDisplay = function () {
    display.innerHTML = ""
}

const numberpad = document.getElementById('numberpad');

numberpad.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    populateDisplay(event.target.innerHTML)
    console.log("User pressed: " + event.target.innerHTML);
    if (operationArray.length%2==0 && operationArray.length>0) {
        displayValue=""
        clearDisplay()
        populateDisplay(event.target.innerHTML)
        operationArray.push(displayValue)
        console.log("Last press was not a number!")
        
        if (interimResult=0) {
        interimResult=operate(operationArray[operationArray.length-2],parseInt(operationArray[operationArray.length-3]),parseInt(operationArray[operationArray.length-1]))
        }
        else {
            operate(operationArray[operationArray.length-2],parseInt(operationArray[operationArray.length-3]),parseInt(operationArray[operationArray.length-1]))
        }
        
        
        
        console.log("Interim is: " + interimResult)
    }
    else {
    operationArray[operationArrayIndex]=displayValue
    console.log("Last press was a number!")
    }
    console.log(operationArray)
})

const operator = document.getElementById('operatorpad');

operatorpad.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    if (event.target.innerHTML === "=") {
        //console.log("User pressed =")
        equals()
        return
    }
    if (event.target.innerHTML === "clear") {
        console.log("User cleared")
        return
    }

    
    operationArray.push(event.target.innerHTML)
    
    operationArrayIndex+=2
    //operationArrayIndex=operationArray
    console.log(operationArray)

    //populateDisplay(event.target.innerHTML)
})

const equals = function () {
    display.innerHTML=interimResult
    console.log("Equals: " + interimResult)
    return
}