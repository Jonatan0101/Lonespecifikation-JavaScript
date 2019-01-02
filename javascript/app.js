const body = document.querySelector('body');

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
const taxTable = document.querySelector('#taxTable');
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


const navBtn = document.querySelector('#navBtn');
// Alla inputs
const allInputs = document.querySelectorAll('input');

// Text som ska redigeras i HTML
const fullNameH = document.querySelector('#fullName');
const personIdH = document.querySelector('#personId');
const salaryTotalH = document.querySelector('#middleSection2');
const taxRateH = document.querySelector('#taxRate');
const taxMoneyH = document.querySelector('#middleSection3');
const salaryOutH = document.querySelector('#salaryOut');
const dateH = document.querySelector('#dateH');


// Message
const msgText = document.querySelector('#msgText');
const msgCont = document.querySelector('#msgCont');

var requireCustom = false;
var interval = 2500;

monthBtn.addEventListener('click', clearAllInput);
hourBtn.addEventListener('click', clearAllInput);

// Lägger till flera event listeners för att det garanterat ska fungera oavsett vad som används
taxTable.addEventListener('change', customTaxInput);
taxTable.addEventListener('click', customTaxInput);


navBtn.addEventListener('click', () => {
    switchPage(false);
})
submitBtn.addEventListener('click', () => {
    let valid = firstName.value !="" && lastName.value !="" && idNum.value !="" && date.value !="";
    console.log(valid && salaryMonth.value != "");

    // valid = requireCustom && (customTax.value === "" || customTax.value >= 100) ? false : true;

    if (requireCustom && (customTax.value === "" || customTax.value >= 100)){
        valid = false;
    } else if(!requireCustom && !valid){
        valid = false;
    } else {
        displayMessage('????????????????????????????')
    }

    console.log(valid && salaryMonth.value != "");
    if(radioMonth.checked){
        if(valid && salaryMonth.value != ""){
            console.log("Månad true")
            fillPage();
            switchPage(true);
            
        } else {
            displayMessage('Fyll i alla fält!');
            console.log("Månad falskt")
        }
    } else if(radioHour.checked){
        if(valid && salaryHour.value != "" && hours.value != "") {
            console.log("tim true");
            fillPage();
            switchPage(true);
        } else {
            displayMessage('Fyll i alla fält!');
            console.log("tim false")
        }
    } else {
        console.log("Something is very wrong :/")
    }
    
});


function switchPage(a){
    if(a){
        mainPage.classList.add('hidden');
        resultPage.classList.remove("hidden", "opacityHide");
        
    } else {
        mainPage.classList.remove('hidden');
        resultPage.classList.add('hidden');
    }
    clearAllInput();
}



function fillPage(){
    fullNameH.textContent = `${firstName.value} ${lastName.value}`;
    personIdH.textContent = idNum.value;
    console.log((salaryHour.value * hours.value).toFixed());

    salaryTotalH.textContent = radioHour.checked ? 
    `${(salaryHour.value * hours.value).toFixed()}` : salaryMonth.value;

    taxRateH.textContent = requireCustom ? 
    Number.parseFloat(customTax.value).toFixed(2) : taxTable.options[taxTable.selectedIndex].value;

    taxMoneyH.textContent = (taxRateH.textContent / 100 * salaryTotalH.textContent).toFixed();

    salaryOutH.textContent = salaryTotalH.textContent - taxMoneyH.textContent;

    dateH.textContent = date.value;
    console.log(date.value);
}

function customTaxInput(){
    if (taxTable.options[taxTable.selectedIndex].value === 'custom') {
        customTax.className = '';
        requireCustom = true;
    } else {
        customTax.className = 'blurInput';
        requireCustom = false;
    }
}

function displayMessage(msg){
    msgCont.style.transform =  'translate(-50%, 0) scale(1)';
    msgText.textContent = msg;

    setInterval(() => {
        msgCont.style.transform = 'translate(-50%, -100%) scale(0.4)';
        msgShow = false;
    },
    interval)


    
};

function clearAllInput() {
    allInputs.forEach((input) => {
        input.value = "";
    });
}
