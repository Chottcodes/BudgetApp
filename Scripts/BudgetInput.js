import { userTotal } from "./Expenses.js";
const BudgetText=document.getElementById("user-Budget-Text");
const BudgetTotalText=document.getElementById("user-Total-Text");
const BudgetInput=document.getElementById("budget-Input");
const BudgetSubmitBTN=document.getElementById("budget-input-Submit-BTN");
let expenses = JSON.parse(localStorage.getItem("Cost")) || [];
console.log(userTotal,expenses);
let Total = 0;
for(let i=0; i<expenses.length;i++)
    {
        let expenseCost = parseFloat(expenses[i][1]);
        Total += expenseCost;
    }
let whatsLeft = userTotal - Total
console.log(Total,whatsLeft)

document.addEventListener("DOMContentLoaded",()=>{
    BudgetText.innerHTML=userTotal;
    BudgetTotalText.innerText=whatsLeft;
})

BudgetSubmitBTN.addEventListener("click",()=>{
    let userInput = BudgetInput.value;
    BudgetText.innerHTML=userInput;
    BudgetTotalText.innerText=userInput;
    localStorage.setItem("userTotal",userInput)
})
