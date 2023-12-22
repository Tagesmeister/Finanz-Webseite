const earningList =[
    {
        
    }
]

let createFormElementEarning = function(parent){

    const formEarning = document.createElement("form");

    const inputEarning = document.createElement("input");
    inputEarning.setAttribute("class", "inputEarnings");
    inputEarning.setAttribute("type", "number");
    inputEarning.setAttribute("step","any")
    
    const submitEarning = document.createElement("input");
    submitEarning.setAttribute("class","inputEarnings")
    submitEarning.setAttribute("type","submit");
    submitEarning.setAttribute("value","save");

    formEarning.appendChild(inputEarning);
    formEarning.appendChild(submitEarning);

    parent.appendChild(formEarning);
}
let createFormElementDisbursements = function(parent){


    const formDisbursements = document.createElement("form");

    const inputFormDisbursements = document.createElement("input");
    inputFormDisbursements.setAttribute("class","inputFormDisbursements");
    inputFormDisbursements.setAttribute("type", "number");

    const submitFormDisbursements = document.createElement("input");
    submitFormDisbursements.setAttribute("class","inputFormDisbursements")
    submitFormDisbursements.setAttribute("type", "submit");
    submitFormDisbursements.setAttribute("value","save");

    formDisbursements.appendChild(inputFormDisbursements);
    formDisbursements.appendChild(submitFormDisbursements);

    parent.appendChild(formDisbursements);
}
//ChatGPT--------------------------------------------------------------------
const addToEarnList = function(event){
    event.preventDefault();
    let number = parseFloat(document.querySelector(".inputEarnings").value);
    let earn = { number };
    earningList.push(earn);
    addListElement(earn, document.querySelector("#formEarns ul"));
}

const addListElement = function(earn, parent){
    let li_earn = document.createElement("li");
    li_earn.classList.add("earn");
    li_earn.innerHTML = earn.number;
    parent.appendChild(li_earn)
}
//-----------------------------------------------------------------------------------


const formEarns = document.getElementById("formEarns");
const formDisbursements = document.getElementById("formDisbursements");
createFormElementEarning(formEarns);
createFormElementDisbursements(formDisbursements);

const formEarning = document.querySelector("#formEarns form");
formEarning.addEventListener("submit", addToEarnList);
