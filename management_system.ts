#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber : number = Math.floor(10000 + Math.random() * 90000)
console.log(randomNumber)

let myBalance : number = 0;

let answer = await inquirer.prompt([
    {
            name : "Students",
            type : "input",
            message: "Enter student name:",
            validate: function(Value) {
            if(value.trim() !== "") {
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

const tutionFee: {[key:string] : number} = {
    "MS.OFFICE": 2000,
    "HTML" : 2000,
    "Javascript": 5000,
    "Typescript": 60000,
    "Python": 1000
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let PaymentType = await inquirer.prompt (
    [
        {
            name: "Payment",
            type: "list",
            message: "Enter payment method: ",
            choices: ["Bank Tranfer" , "Easypaisa", "Jazz cash"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money",
            validate: function(value)
            {
                if(value.trim() !== "")
                {
                    return true;
                }
                return "Please enter a non empty value"
            },
        }
    ]
);
console.log(`\n You selected payment method ${PaymentType.Payment}`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(PaymentType.amount);

if (tutionFees === paymentAmount)
{
    console.log(`Congragulations! You have successfully enrolled ${answer.courses}.\n`);
    let ans = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "What would you like to do next?",
                choices: ["View Status", "Exit"]
            }
])
if(ans.select === "View Status"){
    console.log("\n*******Status************\n");
    console.log(`Student Name: ${answer.Students}`);
    console.log(`Student ID: ${Math.random}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution fees paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`); 
}
else
{
    console.log("Exiting Student Mangement system");
    
}
}
else 
{
    console.log("You have entered the wrong amount for your selected course");
}
