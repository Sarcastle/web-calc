class Calculator {
    constructor(previousOperandandTextElement, currentOperandandTextElement) {
        this.previousOperandandTextElement = previousOperandandTextElement
        this.currentOperandandTextElement = currentOperandandTextElement
}  


clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete() {

}

appendNumber(number) {
 this.currentOperand = number
}
chooseOperation(operation) {

}
compute() {

}
updateDisplay() {
    this.currentOperandandTextElement.innerText = this.currentOperand
}
}
const numberButtons = document.querySelectorAllz('[data-number]')
const operationButtons = document.querySelectorAllz('[data-number]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-equals]')
const previousOperandandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandandTextElement = document.querySelector('[data-current-operand]')


const Calculator = new Calculator (previousOperandandTextElement, currentOperandandTextElement)

numberButtons.forEach(button => {
    button.addEventListener ('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })

})