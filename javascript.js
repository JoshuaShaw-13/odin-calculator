// HTML Elements
const one_btn = document.querySelector("#one");
const two_btn = document.querySelector("#two");
const three_btn = document.querySelector("#three");
const four_btn = document.querySelector("#four");
const five_btn = document.querySelector("#five");
const six_btn = document.querySelector("#six");
const seven_btn = document.querySelector("#seven");
const eight_btn = document.querySelector("#eight");
const nine_btn = document.querySelector("#nine");
const zero_btn = document.querySelector("#zero");

const add_btn = document.querySelector("#add");
const subtract_btn = document.querySelector("#subtract");
const multiply_btn = document.querySelector("#multiply");
const divide_btn = document.querySelector("#divide");
const power_btn = document.querySelector("#power");
const exp_btn = document.querySelector("#exp");

const decimal_btn = document.querySelector("#decimal");

const delete_btn = document.querySelector("#delete");
const clear_btn = document.querySelector("#clear");
const ans_btn = document.querySelector("#ans");
const equal_btn = document.querySelector("#equal");



// Global variables
let answer = "0";



function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function power(num1, num2) {
    let output = 1;
    for (j = 1; j <= num2; j++) {
        output *= num1;
    }
    return output;
};

function exponential(num1, num2) {
    let output = num1;
    for (k = 1; k <= num2; k++) {
        output *= 10;
    }
    return output;
}

function operate(operator, num1, num2) {
    //chooses operation to enact given a certain operator parameter
    if (num1 == "A") {
        num1 = +answer;
    } else {
        num1 = +num1;
    };

    if (num2 == "A") {
        num2 = +answer;
    } else {
        num2 = +num2;
    };
    
    let output = 0;

    if (operator == "+") {
        output = add(num1, num2);
    } else if (operator == "-") {
        output = subtract(num1, num2);
    } else if (operator == "*") {
        output = multiply(num1, num2);
    } else if (operator == "/") {
        output = divide(num1, num2);
    } else if (operator == "^") {
        output = power(num1, num2);
    } else if (operator == "E") {
        output = exponential(num1, num2);
    };

    return output.toString();
};

function update_display(text) {
    const display = document.querySelector("#display");
    display.textContent = text;
};



let display_text = "";

// These event listeners add the text from the button onto the display text string, then update the display

one_btn.addEventListener("click", () => {
    display_text += "1";
    update_display(display_text);
});

two_btn.addEventListener("click", () => {
    display_text += "2";
    update_display(display_text);
});

three_btn.addEventListener("click", () => {
    display_text += "3";
    update_display(display_text);
});

four_btn.addEventListener("click", () => {
    display_text += "4";
    update_display(display_text);
});

five_btn.addEventListener("click", () => {
    display_text += "5";
    update_display(display_text);
});

six_btn.addEventListener("click", () => {
    display_text += "6";
    update_display(display_text);
});

seven_btn.addEventListener("click", () => {
    display_text += "7";
    update_display(display_text);
});

eight_btn.addEventListener("click", () => {
    display_text += "8";
    update_display(display_text);
});

nine_btn.addEventListener("click", () => {
    display_text += "9";
    update_display(display_text);
});

zero_btn.addEventListener("click", () => {
    display_text += "0";
    update_display(display_text);
});

add_btn.addEventListener("click", () => {
    display_text += "+";
    update_display(display_text);
});

subtract_btn.addEventListener("click", () => {
    display_text += "-";
    update_display(display_text);
});

multiply_btn.addEventListener("click", () => {
    display_text += "*";
    update_display(display_text);
});

divide_btn.addEventListener("click", () => {
    display_text += "/";
    update_display(display_text);
});

power_btn.addEventListener("click", () => {
    display_text += "^";
    update_display(display_text);
});

decimal_btn.addEventListener("click", () => {
    display_text += ".";
    update_display(display_text);
});

ans_btn.addEventListener("click", () => {
    display_text += "A";
    update_display(display_text);
});



// These event listeners have functionality beyond adding a character to a string

delete_btn.addEventListener("click", () => {
    display_text = display_text.slice(0, display_text.length - 1);
    update_display(display_text);
});

clear_btn.addEventListener("click", () => {
    display_text = "";
    update_display(display_text);
});

equal_btn.addEventListener("click", () => {
    let equation = [];
    let cur_num = "";
    let invalid = false;
    
    //turn display text string into an array seperated into numbers and operators
    for (i = 0; i < display_text.length; i++) {
        if ("+-*/^".includes(display_text[i])) {
            //checks that operators are not next to each other
            if ("+-*/^".includes(display_text[i+1])) {
                invalid = true;
            };
            
            let num = cur_num;
            equation.push(num);
            equation.push(display_text[i]);
            cur_num = "";
        } else if (display_text[i] == "A") {
            //checks that ans variable is not next to other number
            if (!((i == 0 || "+-*/^".includes(display_text[i-1])) && (i == display_text.length-1 || "+-*/^".includes(display_text[i+1])))) {
                invalid = true;
            } else {
                cur_num += display_text[i];
            };
        } else {
            cur_num += display_text[i];
        };
        if (i == display_text.length-1) {
            equation.push(cur_num);
        };
    };

    //check for invalid equations, operates if valid
    if ("+-*/^".includes(equation[equation.length-1]) || invalid == true) {
        display_text = "";
        alert("Invalid Equation!");
    } else {
        //does an operation when operator is found in equation array, then alters equation array with new value
        let new_num;
        console.log(equation);
        //conducts power and exponent calculations first
        for (i = 0; i < equation.length; i++) {
            if (equation[i] == "^" || equation[i] == "E") {
                console.log(equation);
                new_num = operate(equation[i], equation[i-1], equation[i+1]);
                equation.splice(i-1, 3, new_num);
                i -= 1;
                console.log(equation);
            };
        };

        //conducts multiplication and division second
        for (i = 0; i < equation.length; i++) {
            if (equation[i] == "*" || equation[i] == "/") {
                new_num = operate(equation[i], equation[i-1], equation[i+1]);
                equation.splice(i-1, 3, new_num);
                i -= 1;
            };
        };

        //conducts addition and subtraction third
        for (i = 0; i < equation.length; i++) {
            if (equation[i] == "+" || equation[i] == "-") {
                new_num = operate(equation[i], equation[i-1], equation[i+1]);
                equation.splice(i-1, 3, new_num);
                i -= 1;
            };
        };

        answer = equation[0];
        display_text = equation[0];
    };
    
    update_display(display_text);
});
