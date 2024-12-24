let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");

firstInput.addEventListener("input", validate);
secondInput.addEventListener("input", validate);

function validate() {
    if (parseInt(firstInput.value) > parseInt(secondInput.value)) {
        document.getElementById("errorMessage").textContent =
          "First number is larger";
    } else {
        document.getElementById("errorMessage").textContent = "Second number is larger";
    }
}