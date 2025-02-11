import { userTotal } from "./Expenses.js";

const BudgetText=document.getElementById("user-Budget-Text");
const BudgetTotalText=document.getElementById("user-Total-Text");
const BudgetInput=document.getElementById("budget-Input");
const BudgetSubmitBTN=document.getElementById("budget-input-Submit-BTN");
const calculate=()=>{
let expenses = JSON.parse(localStorage.getItem("Cost")) || [];
let userTotal = parseFloat(localStorage.getItem("userTotal")) || 0;
let Total = 0;
for(let i=0; i<expenses.length;i++)
    {
        let expenseCost = parseFloat(expenses[i][1]);
        Total += expenseCost;
    }
let whatsLeft = userTotal - Total;
if(whatsLeft <= 0){
    return "Out of money";
} else{

    return whatsLeft; 
}
}

document.addEventListener("DOMContentLoaded",()=>{
    BudgetText.innerHTML=userTotal;
    BudgetTotalText.innerText=calculate();
})

BudgetSubmitBTN.addEventListener("click",()=>{
    let userInput = BudgetInput.value;
    BudgetText.innerHTML=userInput;
    BudgetTotalText.innerText=userInput;
    localStorage.setItem("userTotal",userInput)
})
export{calculate,BudgetTotalText}