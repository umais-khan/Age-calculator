
// setting up the current date into variables
const mydate = new Date('2023-05-20'),
    currentDay = mydate.getDate(),
    currentMonth = mydate.getMonth() + 1,
    currentYear = mydate.getFullYear();

// setting a list that defines how many days are in the particular months
const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//get all the user input and button element
const dayEl = document.getElementById("user-day")
const monthEl = document.getElementById("user-month")
const yearEl = document.getElementById("user-year")

const buttonEl = document.getElementById("submit-button")
const errorEL = document.getElementById("error")

const outYear = document.getElementById("year-output")
const outMonth = document.getElementById("month-output")
const outDay = document.getElementById("day-output")


//event listener to get and calculate the difference

buttonEl.addEventListener('click', function (e) {
    //form validation
    let messages = [];

    if (dayEl.value === '' || monthEl.value === '' || yearEl.value === '') {
        messages.push('DOB is required')
    }

    if (yearEl.value > currentYear) {
        messages.push("so you're a time traveler huh?")
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorEL.innerText = `error: ${messages.join(' and ')}`
        return

    }




    //variables for the output age
    let monthOut;
    let yearOut;
    let dayOut;

    //variable for the user input DOB
    let dayValue = dayEl.value;
    let monthValue = monthEl.value;
    let yearValue = yearEl.value;


    //calculate the difference

    if (currentMonth - monthValue < 0) {
        monthOut = currentMonth - monthValue + 12
        yearOut = currentYear - yearValue - 1
    }
    else {
        monthOut = currentMonth - monthValue;
        yearOut = currentYear - yearValue
    }

    if (currentDay - dayValue < 0) {
        monthOut = monthOut - 1
        dayOut = currentDay - dayValue + monthList[monthOut + 1];
    } else {
        dayOut = currentDay - dayValue;
    }

    // show the output age

    console.log(`day=${dayOut} month=${monthOut} year=${yearOut}`);

    outYear.innerHTML = `${yearOut} years`
    outMonth.innerHTML = `${monthOut} months`
    outDay.innerHTML = `${dayOut} days`

})
// working of dark mode
function dark_mode() {
    var body = document.querySelector("body");
    var container = document.querySelector(".container");
    var labels = document.querySelector(".labels");
    var inputs = document.querySelectorAll("input");
    var button = document.querySelector(".dark-mode"); // Assuming there is only one button with the class "dark-mode"

    if (body.style.backgroundColor === "black") {
        // If already in dark mode, switch back to light mode
        body.style.backgroundColor = "white";
        container.style.backgroundColor = "white";
        labels.style.color = "black";
        if (button) {
            button.style.backgroundColor = "black";
            button.style.color = "white";
        }
        inputs.forEach(function (input) {
            input.style.color = "black";
        });
    } else {
        // Switch to dark mode
        body.style.backgroundColor = "black";
        container.style.backgroundColor = "black";
        labels.style.color = "white";
        if (button) {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        }
        inputs.forEach(function (input) {
            input.style.color = "white";
        });
    }
}
