const btnMonth = document.querySelector('#btnMonth');
const btnHour = document.querySelector('#btnHour');

// Gömda radio btns
const radioHour = document.querySelector('#radioHour');
const radioMonth = document.querySelector('#radioMonth')

// Fliktext
const monthBtn = document.querySelector('#labelMonth');
const hourBtn = document.querySelector('#labelHour');

// Inputs
const salaryMonth = document.querySelector('#salary')
const salaryHour = document.querySelector('#hourSalary');
const hours = document.querySelector('#amountHour');
const firstName = document.querySelector('#firstName'); 
const lastName = document.querySelector('#lastName');
const idNum = document.querySelector('#idNum');
const date = document.querySelector('#date');

// Submitknapp
const submitBtn = document.querySelector('#submit');

// Alla inputs
const allInputs = document.querySelectorAll('input');




monthBtn.addEventListener('click', () => {
    clearAllInput();
});
hourBtn.addEventListener('click', () => {
    clearAllInput();
});

submitBtn.addEventListener('click', () => {
    let valid = firstName.value !="" && lastName.value !="" && idNum.value !="" && date.value !="";


    if(radioMonth.checked){
        if(valid && salaryMonth.value != ""){
            console.log("Månad true")
        } else {
            console.log("Månad falskt")
        }
    } else if(radioHour.checked){
        if(valid && salaryHour.value != "" && hours.value != "") {
            console.log("tim true")
        } else {
            console.log("tim false")
        }
    }
    
});

function clearAllInput(){
    allInputs.forEach((input) => {
        input.value = "";
    });
}


