let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let operand = '';



const screenElement = document.querySelector('.screen');
const leftSideButtons = document.querySelectorAll(".left-side button");
const equalsToButton = document.querySelector('.equalsTo');
const operationButtons = document.querySelectorAll(".right-side button");

function screenTextUpdater(textContent)
{
    screenElement.textContent = textContent;
}

function mathematics(firstNumber, secondNumber, operand)
{
    switch(operand)
    {
        case "+":
            return Number(firstNumber) + Number(secondNumber);
        case "-":
            return Number(firstNumber) - Number(secondNumber);
        case 'x':
            return Number(firstNumber) * Number(secondNumber);
        case '/':
            return Number(firstNumber) / Number(secondNumber);
    }
};

function numberOff()
{
    leftSideButtons.forEach((element) => 
    {
        element.disabled = true;
    })
};

function numberOn()
{
    leftSideButtons.forEach((element) => 
    {
        if(element.className != 'equalsTo')
        {
            element.disabled = false;
        }
        
    })
}

function answerOff()
{
    equalsToButton.disabled = true;
}

function answerOn()
{
    equalsToButton.disabled = false;
}

answerOff();

leftSideButtons.forEach((element) => {
    element.addEventListener('click', () => 
    {
        const value = element.className;
        
        if(value === 'decimal')
        {
            if(!isSecondNumber)
            {
                if(firstNumber.includes('.'))
                {
                    return;
                }
                firstNumber += '.';
                screenTextUpdater(firstNumber);
            }
            else
            {
                if(secondNumber.includes('.'))
                {
                    return;
                }
                secondNumber += '.';
                screenTextUpdater(secondNumber);
            }
        }
        else if(value === 'equalsTo')
        {
            if(firstNumber && secondNumber && operand)
            {
                let answer = String(mathematics(firstNumber, secondNumber, operand));
                screenTextUpdater(String(answer));
                
                //disable numbers after answer is printed
                numberOff();

                firstNumber = answer;
                secondNumber = '';
            }
        }
        else
        {
            if(!isSecondNumber)
            {   
                firstNumber += value;
                screenTextUpdater(firstNumber);
            }
            else
            {
                secondNumber += value;
                screenTextUpdater(secondNumber);
                answerOn();
                
            }
        }
    });
});

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
                numberOn();
                answerOff();
                screenTextUpdater(0);
            }
            else if(operandValue === '-' || operandValue === '+')
            {
                if(!firstNumber || firstNumber === '-' || firstNumber === '+')
                {
                    firstNumber = operandValue;
                    screenTextUpdater(firstNumber);
                }
                else if (isSecondNumber)
                {
                    secondNumber = operandValue;
                    screenTextUpdater(secondNumber);
                }
                else
                {
                    operand = operandValue;
                    isSecondNumber = true;
                    screenTextUpdater(operandValue);
                    numberOn();
                }
            }
            else
            {
                if(firstNumber.includes('-') && firstNumber.length > 1 || 
                    firstNumber.includes('+') && firstNumber.length > 1 ||
                    firstNumber.length > 0)
                {
                    operand = operandValue;
                    isSecondNumber = true;
                    screenTextUpdater(operandValue);
                    numberOn();
                }
            }
        });
    });
    