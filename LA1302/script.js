let createFormElementEarning = function(parent){

    const formEarning = document.createElement("form");

    const inputEarning = document.createElement("input");
    inputEarning.setAttribute("class", "inputEarnings")  
    inputEarning.setAttribute("type", "number")
    
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


const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
createFormElementEarning(form1);
createFormElementDisbursements(form2);
