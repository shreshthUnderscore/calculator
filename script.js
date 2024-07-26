let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let operand = '';
let numberString = '';

//code to change the contents of the screen

const screenStringElement = document.querySelector('.screen-string');
const screenAnswerElement = document.querySelector('.screen-answer');

function screenTextUpdater(screenElement, textContent)
{
    screenElement.textContent = textContent;
}



const numbersDiv = document.querySelector(".numbers");
const numberButtons = numbersDiv.querySelectorAll("button");

numberButtons.forEach(element => {
    element.addEventListener('click', () => 
    {
        const value = element.className;

        if(value === '=')
        {
            if(firstNumber && secondNumber && operand)
            {
                let answer = String(mathematics(firstNumber, secondNumber, operand));

                screenTextUpdater(screenAnswerElement, String(answer));

                firstNumber = String(answer);
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
                numberString += value;
                screenTextUpdater(screenStringElement, numberString);
            }
            else
            {
                secondNumber += value;
                numberString += value;
                screenTextUpdater(screenStringElement, numberString);
            }
        }
    });
});

//code to get the operator

const operationsDiv = document.querySelector(".operations");
const operationButtons = operationsDiv.querySelectorAll("button");

operationButtons.forEach(element =>
{
    element.addEventListener('click', () => {
        const operandValue = element.className;
        
        operand = operandValue;

        numberString += operand;

        screenTextUpdater(screenStringElement, numberString);
        isSecondNumber = true;
    });
});





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

