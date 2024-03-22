import inquirer from "inquirer";
const bmi = await inquirer.prompt([
    {
        name: "weight",
        type: "string",
        message: "Enter your weight"
    },
    {
        name: "height",
        type: "string",
        message: "Enter your height"
    }
]);
let BMI = bmi.weight / (bmi.height * bmi.height);
console.log(`your bmi is ${BMI}`);
