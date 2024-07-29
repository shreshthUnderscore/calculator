let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let operand = '';
let numberString = '';
//code to change the contents of the screen
const screenElement = document.querySelector('.screen');

function screenTextUpdater(screenElement, textContent)
{
    screenElement.textContent = textContent;
}

const leftSideButtons = document.querySelectorAll(".left-side button");

leftSideButtons.forEach(element => {
    element.addEventListener('click', () => 
    {
        const value = element.className;
        
        if(value === '.')
        {
            if(!isSecondNumber)
            {
                if(firstNumber.includes('.'))
                {
                    return;
                }
                firstNumber += '.';
                screenTextUpdater(screenElement, firstNumber);
            }
            else
            {
                if(secondNumber.includes('.'))
                {
                    return;
                }
                secondNumber += '.';
                screenTextUpdater(screenElement, secondNumber);
            }
        }
        else if(value === '=')
        {
            if(firstNumber && secondNumber && operand)
            {
                let answer = String(mathematics(firstNumber, secondNumber, operand));

                //disable numbers after answer is printed
                numberToggler();

                screenTextUpdater(screenElement, String(answer));

                firstNumber = String(answer);
                secondNumber = '';
                isSecondNumber = true;
            }
        }
        else
        {
            if(!isSecondNumber)
            {   
                firstNumber += value;
                screenTextUpdater(screenElement, firstNumber);
            }
            else
            {
                secondNumber += value;
                answerToggle();
                screenTextUpdater(screenElement, secondNumber);
            }
        }
    });
});

//code to get the operator
const operationButtons = document.querySelectorAll(".right-side button");

operationButtons.forEach(element =>
{
    element.addEventListener('click', () => {
        const operandValue = element.className;
        
        if(operandValue === 'AC')
        {
            firstNumber = '';
            secondNumber = '';
            isSecondNumber = false;
            operand = '';
            screenTextUpdater(screenElement, 0);
        }
        else
        {
            operand = operandValue;
            screenTextUpdater(screenElement, operand);
            isSecondNumber = true;
        }
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


if(operandValue === '-')
    {
        if(!isFirstNumber)
        {
            firstNumber += operandValue;
            screenTextUpdater(firstNumber);
        }
        else
        {
            operand = operandValue;
            isFirstNumber = true;
            screenTextUpdater(operandValue);
        }
    }
    else if(operandValue === '+')
    {
        if(!isFirstNumber)
        {
            firstNumber = '+';
            screenTextUpdater(firstNumber);
        }
        else
        {
            operand = operandValue;
            isFirstNumber = true;
            screenTextUpdater(operandValue);
        }
    }
    else
    {
        operand = operandValue;
        isFirstNumber = true;
        screenTextUpdater(operandValue);
    }
}
