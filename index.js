const inputButtons = document.querySelectorAll("button.input-button");
const display = document.querySelector("p.calculator-box");
let input = "";

let calculation;

// adds an event listener for all of the input buttons so that their values will be written to the calculator display box when pressed
inputButtons.forEach(button => {
    button.addEventListener("click", function() {
        const value = button.textContent;
        input += value;
        display.textContent = input;

    });
});
// adds an event listener for the clear button so it will clear the calculator display box when it is pressed
document.querySelector("button.clear-button").addEventListener("click", () => {
    input = "";
    display.textContent = "";
});

/* adds an event listener to the = button so that the string inside the calculator display box
   will be pulled and evaluated by the evaluate expression from the mathjs library and then displayed*/ 
document.querySelector("button.equal-button").addEventListener("click", () => {
    calculation = math.evaluate(input);
    display.textContent = calculation;
});