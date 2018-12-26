const btnMonth = document.querySelector('#btnMonth');
const btnHour = document.querySelector('#btnHour');

const mainPage = document.querySelector('.main-container');
const resultPage = document.querySelector('.result-container');
// Gömda radio btns
const radioHour = document.querySelector('#radioHour');
const radioMonth = document.querySelector('#radioMonth')

// Fliktext
const monthBtn = document.querySelector('#labelMonth');
const hourBtn = document.querySelector('#labelHour');

// Inputs
const taxTable = document.querySelector('#skatteTabell')
const customTax = document.querySelector('#customTax');
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

var requireCustom = false;

taxTable.addEventListener('click', () => {
    
    if(taxTable.options[taxTable.selectedIndex].value === 'custom'){
        customTax.className = ''
        requireCustom = true;
    } else {
        customTax.className = 'hidden';
        requireCustom = false;
    }
});

monthBtn.addEventListener("click", clearAllInput());
hourBtn.addEventListener('click', clearAllInput());

submitBtn.addEventListener('click', () => {
    let valid = firstName.value !="" && lastName.value !="" && idNum.value !="" && date.value !="";

    

    if(radioMonth.checked){
        if(valid && salaryMonth.value != ""){
            console.log("Månad true")
            switchPage();
        } else {
            console.log("Månad falskt")
        }
    } else if(radioHour.checked){
        if(valid && salaryHour.value != "" && hours.value != "") {
            console.log("tim true")
            switchPage();
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

function switchPage(){
    mainPage.className = 'hidden';
    resultPage.classList.remove('hidden');
}
function fillPage(a, b, c, d, e, f, g){

}