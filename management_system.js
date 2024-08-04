"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(10000 + Math.random() * 90000);
console.log(randomNumber);
var myBalance = 0;
var answer = await inquirer_1.default.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter student name:",
        validate: function (Value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        choices: ["MS.OFFICE", "HTML", "Javascript", "Typescript", "Python"]
    },
]);
var tutionFee = {
    "MS.OFFICE": 2000,
    "HTML": 2000,
    "Javascript": 5000,
    "Typescript": 60000,
    "Python": 1000
};
console.log("\nTution Fees: ".concat(tutionFee[answer.courses], "/-\n"));
console.log("Balance: ".concat(myBalance, "\n"));
var PaymentType = await inquirer_1.default.prompt([
    {
        name: "Payment",
        type: "list",
        message: "Enter payment method: ",
        choices: ["Bank Tranfer", "Easypaisa", "Jazz cash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value";
        },
    }
]);
console.log("\n You selected payment method ".concat(PaymentType.Payment));
var tutionFees = tutionFee[answer.courses];
var paymentAmount = parseFloat(PaymentType.amount);
if (tutionFees === paymentAmount) {
    console.log("Congragulations! You have successfully enrolled ".concat(answer.courses, ".\n"));
    var ans = await inquirer_1.default.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*******Status************\n");
        console.log("Student Name: ".concat(answer.Students));
        console.log("Student ID: ".concat(Math.random));
        console.log("Course: ".concat(answer.courses));
        console.log("Tution fees paid: ".concat(paymentAmount));
        console.log("Balance: ".concat(myBalance += paymentAmount));
    }
    else {
        console.log("Exiting Student Mangement system");
    }
}
else {
    console.log("You have entered the wrong amount for your selected course");
}
