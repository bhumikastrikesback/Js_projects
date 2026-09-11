let display = document.getElementById("display");

let buttons = document.querySelectorAll(".buttons button");


for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {

        let value = buttons[i].innerHTML;


        // Clear button
        if (value === "C") {

            display.value = "";

        }


        // Delete button
        else if (value === "⌫") {

            display.value = display.value.slice(0, -1);

        }


        // Equal button
        else if (value === "=") {

            try {

                let expression = display.value;

                // Change calculator symbols for JavaScript
                expression = expression.replace(/×/g, "*");
                expression = expression.replace(/÷/g, "/");

                display.value = eval(expression);

            }

            catch {

                display.value = "Error";

            }

        }


        // Number or operator
        else {

            display.value = display.value + value;

        }

    };

}