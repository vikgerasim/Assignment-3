/*jshint esversion: 6 */

const RATE = [35, 20];
const SELECTIONS = ["full", "half"];
const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday"];


let day_counter = 0;
let daily_rate = RATE[0];
let element_list = [];
let selection_list = [];


// Displays the total calculated cost
const calculate = () => {
    document.getElementById("calculated-cost").innerHTML = day_counter * daily_rate;
};


// Iterates through the day button elements and sets up their on-click function 
for (const day of DAYS) {
    const element = document.getElementById(day);
    element.addEventListener("click", function() {
        if (!element.classList.contains("clicked")) {
            element.classList.add("clicked");
            day_counter++;
            calculate();
        }
    });
    element_list.push(element);
}


// Sets up the clear button on-click function
document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("calculated-cost").innerHTML = day_counter = 0;
    for (const element of element_list) {
        element.classList.remove("clicked");
    }
});


// Iterates throught the half and full button elements and sets up their on-click function
for (let index = 0; index < 2; index++) {
    const element = document.getElementById(SELECTIONS[index]);
    element.addEventListener("click", function() {
        if (!element.classList.contains("clicked")) {
            element.classList.add("clicked");
            selection_list[(index + 1) % 2].classList.remove("clicked");
            daily_rate = RATE[index];
            calculate();
        }
    });
    selection_list.push(element);
}