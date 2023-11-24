const createFormElementEarning = function(parent){
    const formEarning = document.createElement("form");
    formEarning.id = "formEarning";

    const inputEarning = document.createElement("input");
    inputEarning.id = "inputEarning";
    inputEarning.setAttribute("type", "number");
    
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
    const inputVal = document.getElementById("inputEarning").value;
    const inputValText = document.getElementById("submitEarningText").value
    if (inputVal) {
        const earnList = document.getElementById("earnList"); 
        const li_earn = document.createElement("li");
        li_earn.textContent = inputValText + " " + inputVal;
        earnList.appendChild(li_earn);
        document.getElementById("submitEarningText", "inputEarning").value = '';
    }
   
};

const addToDisbursementList = function(e){
    e.preventDefault();
    const inputVal = document.getElementById("inputDisbursements").value;
    const inputValText = document.getElementById("submitDisbursementsText").value;
    if (inputVal) {
        const disbursementList = document.getElementById("disbursementList");
        const li_disburse = document.createElement("li");
        li_disburse.textContent = inputValText + " " +inputVal;
        disbursementList.appendChild(li_disburse);
        document.getElementById("inputDisbursements", "submitDisbursementsText").value = '';
    }
};


const formEarnsParent = document.getElementById("formEarns");
const formDisbursementsParent = document.getElementById("formDisbursements");

createFormElementEarning(formEarnsParent);
createFormElementDisbursements(formDisbursementsParent);

formEarnsParent.addEventListener("submit", addToEarnList);
formDisbursementsParent.addEventListener("submit", addToDisbursementList);
