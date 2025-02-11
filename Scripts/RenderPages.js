import { ShowMyList } from "./Expenses.js";
// NavButtons
const homeButton=document.getElementById("home-button")
const budgetButton=document.getElementById("budget-button")
const expenseButton=document.getElementById("expense-button")
const expensesIconButton=document.getElementById("plus-BTN-Expense");
const expensesIconButtonTier=document.getElementById("plus-BTN-Expense-Tier")
// pages
const expensesPage=document.getElementById("expense-List-Container");
const expenseTierHomePage=document.getElementById("expense-Tier-Container");
const addExpensePage=document.getElementById("add-Expenses");
const changeBudgetPage=document.getElementById("change-budget-amount-page");
//Pages array
const pagesArr=[expensesPage,expenseTierHomePage,addExpensePage,changeBudgetPage];


homeButton.addEventListener("click",()=>{
    // pagesArr.forEach((page) =>{
    //     if (page.id ==="expense-Tier-Container")
    //     {
    //         expenseTierHomePage.classList.remove('hidden')
    //     }else{
    //         page.classList.add('hidden')
    //     }
    // })
    togglePages(pagesArr,"expense-Tier-Container")
})
budgetButton.addEventListener("click",()=>{
    togglePages(pagesArr,"change-budget-amount-page")
})
expenseButton.addEventListener("click",() => {
    togglePages(pagesArr,"expense-List-Container");
    ShowMyList();
})
expensesIconButton.addEventListener("click",() => {
    togglePages(pagesArr,"add-Expenses");
})
expensesIconButtonTier.addEventListener("click",() => {
    togglePages(pagesArr,"add-Expenses");
})
const togglePages = (pagesArr,pageID) => {
    pagesArr.forEach((page) => {
        if(page.id===pageID)
        {
            page.classList.remove('hidden')
        }else{
            page.classList.add('hidden')
        }
    })
}
