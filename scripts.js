let currDisplay = '';
const displayElement = document.querySelector('#dis');
displayElement.value = currDisplay;

const enter = () => {
    try {
        // Evaluate the expression and update the display
        currDisplay = eval(currDisplay).toString();
        displayElement.value = currDisplay;
    } catch (error) {
        // Handle errors by displaying an error message
        currDisplay = 'ERROR';
    }
};

const addClickListener = (id) => {
    document.querySelector(`#${id}`).addEventListener('click', () => {
        // Update current display based on button clicked
        const buttonValue = document.querySelector(`#${id}`).innerText;
        if (buttonValue === 'C') {
            // Clear the display
            currDisplay = '';
        } else if (buttonValue === '=') {
            // Perform calculation
            enter();
        } else if(buttonValue === 'log'){
            currDisplay = Math.log(parseFloat(currDisplay)).toString();
        }
        else if(buttonValue === 'Back'){
            currDisplay = currDisplay.slice(0,currDisplay.length-1);
        }
        else if(buttonValue === '^'){
            currDisplay = currDisplay+'**';
        }
        
        else {
            // Append the button value to the current display
            currDisplay += buttonValue;
        }

        // Update the display
        displayElement.value = currDisplay;
    });
};

// Add click listeners to number buttons
for (let i = 0; i <= 9; i++) {
    addClickListener(`btn${i}`);
}

const operators = ['Plus', 'Minus', 'Mul', 'Div','Log','expo','dot','C','equal','back'];
operators.forEach((operator) => {
    addClickListener(`btn${operator}`);
});

