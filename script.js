const bilAmount = document.querySelector('#bill-amount');
const tip = document.querySelector('#tip');
const people = document.querySelector('#people');
const tipAmount = document.querySelector('#tip-amount')
const totalAmount = document.querySelector('#total-amount')
const perPerson = document.querySelector('#perPerson')
const calculate = document.querySelector('#calculate')
const reset = document.querySelector('#reset')

calculate.addEventListener('click', ()=>{
    const bill = Number(bilAmount.value);
    const tipPercentage = Number(tip.value)
    const person = Number(people.value)

    //validation
    if(bill<0 || tip<0 || person<0){
        alert("Please enter valid value!")
        return
    }

    const tipValue = (tipPercentage * bill) / 100
    const total = tipValue + bill
    const amountEach = total / person

    //display
    tipAmount.textContent = tipValue.toFixed(2)
    totalAmount.textContent = total.toFixed(2)
    perPerson.textContent = amountEach.toFixed(2)
});

reset.addEventListener('click', ()=>{
    bilAmount.value = "";
    tip.value = "";
    people.value = "";

    tipAmount.textContent  = "0";
    totalAmount.textContent  = "0";
    perPerson.textContent  = "0";
})
