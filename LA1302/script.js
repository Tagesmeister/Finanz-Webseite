const createFormElementEarning = function(parent){
    const formEarning = document.createElement("form");
    formEarning.id = "formEarning";

    const inputEarning = document.createElement("input");
    inputEarning.id = "inputEarning";
    inputEarning.setAttribute("type", "number");
    inputEarning.setAttribute("step","any")
    
    const submitEarning = document.createElement("input");
    submitEarning.setAttribute("type", "submit");
    submitEarning.setAttribute("value", "Save");

    const submitEarningText = document.createElement("input");
    submitEarningText.id = "submitEarningText";
    submitEarningText.setAttribute("type","string");
    
    formEarning.appendChild(submitEarningText);
    formEarning.appendChild(inputEarning); 
    formEarning.appendChild(submitEarning);
    
    parent.appendChild(formEarning);
};

const createFormElementDisbursements = function(parent){
    const formDisbursements = document.createElement("form");
    formDisbursements.id = "formDisbursements";

    const inputDisbursements = document.createElement("input");
    inputDisbursements.id = "inputDisbursements";
    inputDisbursements.setAttribute("type", "number");

    const submitDisbursements = document.createElement("input");
    submitDisbursements.setAttribute("type", "submit");
    submitDisbursements.setAttribute("value", "Save");

    const submitDisbursementsText = document.createElement("input");
    submitDisbursementsText.id = "submitDisbursementsText";
    submitDisbursementsText.setAttribute("type","string");

    formDisbursements.appendChild(submitDisbursementsText);
    formDisbursements.appendChild(inputDisbursements);
    formDisbursements.appendChild(submitDisbursements);
    parent.appendChild(formDisbursements);
};

const addToEarnList = function(e){
    e.preventDefault();
    const inputEarning = document.getElementById("inputEarning");
    const inputEarningText = document.getElementById("submitEarningText");

    if (inputEarning.value) {
        const earnList = document.getElementById("earnList"); 
        const li_earn = document.createElement("li");
        li_earn.textContent = inputEarningText.value + " " + inputEarning.value;
        earnList.appendChild(li_earn);

        inputEarning.value = '';
        inputEarningText.value = '';
    }
   
};

const addToDisbursementList = function(e){
    e.preventDefault();
    const inputDisbursements = document.getElementById("inputDisbursements");
    const inputDisbursementsText = document.getElementById("submitDisbursementsText");

    if (inputDisbursements.value) {
        const disbursementList = document.getElementById("disbursementList");
        const li_disburse = document.createElement("li");
        li_disburse.textContent = inputDisbursementsText.value + " " + inputDisbursements.value;
        disbursementList.appendChild(li_disburse);

        inputDisbursements.value = '';
        inputDisbursementsText.value = '';
    }
};


const calculateBudget = function(){
const budget = calculateSumEarnings() - calculateSumDisbursement();

outPutBudget(budget);
}

function calculateSumEarnings(){
    const earnListItems = document.getElementById("earnList").children;
    let sum = 0;
    Array.from(earnListItems).forEach(function(item){
        const value = parseFloat(item.textContent.split(" ")[1]);
        if (!isNaN(value)) {
            sum += value;
        }
    });
    return sum;
}

function calculateSumDisbursement(){
    const disbursementListItems = document.getElementById("disbursementList").children;
    let sum = 0;
    Array.from(disbursementListItems).forEach(function(item){
        const value = parseFloat(item.textContent.split(" ")[1]);
        if (!isNaN(value)) {
            sum += value;
        }
    });
    return sum;
}
function outPutBudget(budget){
    document.getElementById('budgetDisplay').textContent = `Budget: $${budget.toFixed(2)}`;
}




const formEarnsParent = document.getElementById("formEarns");
const formDisbursementsParent = document.getElementById("formDisbursements");

const buttonToCalculate = document.getElementById("calculateBudgetButton");

createFormElementEarning(formEarnsParent);
createFormElementDisbursements(formDisbursementsParent);

formEarnsParent.addEventListener("submit", addToEarnList);
formDisbursementsParent.addEventListener("submit", addToDisbursementList);

buttonToCalculate.addEventListener("click", calculateBudget);

