let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let operand = '';
let stringOfNumbers = '';



const numbersDiv = document.querySelector(".numbers");
const numberButtons = numbersDiv.querySelectorAll("button");

numberButtons.forEach(element => {
    element.addEventListener('onclick', () => 
    {
        const value = element.className;

        if(value === '=')
        {
            if(firstNumber && secondNumber && operand)
            {
                let answer = mathematics(firstNumber, secondNumber, operand);

                firstNumber = answer;
                secondNumber = '';
                isSecondNumber = true;

                return answer;
            }
        }
        else
        {
            if(!isSecondNumber)
            {
                firstNumber += value;
            }
            else
            {
                secondNumber += value;
            }
        }
    });
});

const operationsDiv = document.querySelector(".operations");
const operationButtons = operationsDiv.querySelectorAll("button");

operationButtons.forEach(element => (
    element.addEventListener('onclick', () => {
        const operandValue = element.className;
        
        operand = operandValue;
        isSecondNumber = true;
    });
));



function mathematics(firstNumber, secondNumber, operand)
{
    switch(operand)
    {
        case "+":
            return (+firstNumber) + (+secondNumber);
        case "-":
            return (+firstNumber) - (+secondNumber);
        case 'x':
            return (+firstNumber) * (+secondNumber);
        case '/':
            return (+firstNumber) / (+secondNumber);
    }
};

