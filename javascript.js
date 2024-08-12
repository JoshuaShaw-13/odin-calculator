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

const delete_btn = document.querySelector("#delete");
const equal_btn = document.querySelector("#equal");



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

function operate(operator, num1, num2) {
    num1 = +num1;
    num2 = +num2;
    
    let output = 0;

    if (operator == "+") {
        output = add(num1, num2);
    } else if (operator == "-") {
        output = subtract(num1, num2);
    } else if (operator == "*") {
        output = multiply(num1, num2);
    } else if (operator == "/") {
        output = divide(num1, num2);
    };

    return output.toString();
};

function update_display(text) {
    const display = document.querySelector("#display");
    display.textContent = text;
};



let display_text = "";

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



delete_btn.addEventListener("click", () => {
    display_text = "";
    update_display(display_text);
});

equal_btn.addEventListener("click", () => {
    let equation = [];
    let cur_num = "";
    let double_op = false;
    
    for (i = 0; i < display_text.length; i++) {
        if ("+-*/".includes(display_text[i])) {
            if ("+-*/".includes(display_text[i+1])) {
                double_op = true;
            };
            
            let num = cur_num;
            equation.push(num);
            equation.push(display_text[i]);
            cur_num = "";
        } else {
            cur_num += display_text[i];
        };
        if (i == display_text.length-1) {
            equation.push(cur_num);
        };
    };



    if ("+-*/".includes(equation[equation.length-1]) || double_op == true) {
        display_text = "";
        alert("Invalid Equation!");
    } else {
        let new_num;

        for (i = 0; i < equation.length; i++) {
            if (equation[i] == "*" || equation[i] == "/") {
                new_num = operate(equation[i], equation[i-1], equation[i+1]);
                equation.splice(i-1, 3, new_num);
            };
        };

        for (i = 0; i < equation.length; i++) {
            if (equation[i] == "+" || equation[i] == "-") {
                new_num = operate(equation[i], equation[i-1], equation[i+1]);
                equation.splice(i-1, 3, new_num);
            };
        };

        display_text = equation[0];
    };
    
    update_display(display_text);
});
