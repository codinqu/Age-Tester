
function checkAge() {

    const ageInput = document.getElementById("inputDOB").value;
    const age = parseInt(ageInput); // Convert input to an integer

    console.log(age);

    if (isNaN(age)) {
        alert("Please enter a valid age.");
    } else if (2024 - age >= 18) {
        alert("You are an adult! Welcome to the website!");
    } else if (age - 2024 <= 18) {
        alert("You are not an adult! Please leave!");
    }
}

let btnClicked = document.querySelector("button");
btnClicked.addEventListener("click", checkAge);