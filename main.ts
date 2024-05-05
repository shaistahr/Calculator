import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const answer = await inquirer.prompt([
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
])

if (answer.operation === "addition") {
    console.log(answer.firstnumber + answer.secondnumber)
}
else if (answer.operation === "subtration") {
    console.log(answer.firstnumber - answer.secondnumber)
}
else if (answer.operation === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)
}
else if  (answer.operation === "division") {
    console.log(answer.firstnumber / answer.secondnumber)
}
else {
    console.log("enter valid operation")
}