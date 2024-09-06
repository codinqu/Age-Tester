
function checkAge() {

    const ageInput = document.getElementById("inputDOB").value;
    const age = parseInt(ageInput); // Convert input to an integer

    console.log(age);

    if (isNaN(age)) {
        alert("Please enter a valid age.");
    } else if (2024 - age >= 18) {
        alert("Welcome to adulting! It sucks doesn't it?! Oh well, better get used to it!");
    } else if (age - 2024 <= 18) {
        alert("You are not an adult! Please leave and go watch a cartoon or something.");
    }
}

let btnClicked = document.querySelector("button");
btnClicked.addEventListener("click", checkAge);