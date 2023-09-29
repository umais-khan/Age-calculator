



const currentDay = 29;
const currentMonth = 9;
const currentYear = 2023;

const dayEl = document.getElementById("user-day")
const monthEl = document.getElementById("user-month")
const yearEl = document.getElementById("user-year")
const buttonEl = document.getElementById("submit-button")

buttonEl.addEventListener('click', function() {
    let dayValue = dayEl.value;
    let monthValue = monthEl.value;
    let yearValue = yearEl.value;

    console.log(dayValue)

})



