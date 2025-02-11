import { calculate,BudgetTotalText } from "./BudgetInput.js";

const ExpenseNameInput = document.getElementById("expense-Name-Input")
const ExpenseCostInput=document.getElementById("expenses-Cost-Input")
const ExpenseButtonAddButton=document.getElementById("expense-input-add-Btn");

// list
const expensesList = document.getElementById("expenses-list");


let expenses = JSON.parse(localStorage.getItem("Cost")) || [];
let userTotal=parseFloat(localStorage.getItem("userTotal"))||0;
let Total = 0;

for(let i=0; i<expenses.length;i++)
    {
        let expenseCost = parseFloat(expenses[i][1]);
        Total += expenseCost;
    }



ExpenseButtonAddButton.addEventListener("click",()=>{
    const expenseName = ExpenseNameInput.value;
    const expenseCost = parseFloat(ExpenseCostInput.value);
    expenses.push([expenseName,expenseCost])
    localStorage.setItem("Cost",JSON.stringify(expenses));
  
    BudgetTotalText.innerText=calculate();
})

const ShowMyList=()=>{
    expensesList.innerHTML = "";
    
    expenses.forEach(expense => {
        const expenseName = expense[0]; 
        const expenseCost = expense[1];
        
        
        
        const li = document.createElement("li");

        
       
            li.classList.add("border", "border-green-400", "rounded-lg", "flex", "justify-around");
      
        
            
        

        // expense name div container
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("w-[25%]", "overflow-x-auto", "whitespace-nowrap");
        const nameH1 = document.createElement("h1");
        nameH1.textContent = expenseName;
        nameDiv.appendChild(nameH1);
        // cost of the expense
        const costDiv = document.createElement("div");
        costDiv.classList.add("w-[25%]");
        const costH1 = document.createElement("h1");
        costH1.textContent = `$${expenseCost}`;
        costDiv.appendChild(costH1);
        // creating the button
        const removeButton = document.createElement("remove-button");
        removeButton.classList.add("w-[10%]","flex","justify-center","items-center");
        const removeImage = document.createElement("img");
        removeImage.src = "./assets/subtraction.png";
        removeImage.classList.add("object-contain", "w-[60%]");
        removeImage.alt = "subtraction sign";
        removeButton.appendChild(removeImage);
        // create eventListener to the button to remove expenses
        removeButton.addEventListener("click",()=>{
            for(let i =0;i<expenses.length;i++)
            {
                if(expenses[i] === expense)
                {
                    userTotal -= parseFloat(expenses[i][1]);
                    expenses.splice(i,1)
                    break;
                }
            }
            localStorage.setItem("Cost", JSON.stringify(expenses))
            localStorage.setItem("userTotal", userTotal);
            BudgetTotalText.innerText = calculate();
            ShowMyList();
        })

        li.appendChild(nameDiv);
        li.appendChild(costDiv);
        li.appendChild(removeButton);
        expensesList.appendChild(li);
    });


}
ShowMyList()
export {userTotal,expenses,ShowMyList}