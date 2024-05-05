"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        name: "first number",
        type: "number",
        message: "enter first number"
    },
    {
        name: "second number",
        type: "number",
        message: "enter second number"
    },
    {
        name: "operations",
        type: "list",
        message: "which operation you perform",
        Choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
if (answer.operation === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operation === "subtration") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operation === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operation === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("enter valid operation");
}
