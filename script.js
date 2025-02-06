const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const useRegex = (input) => {
    const userInput = input;
    let regex = /1*([0-9]+([0-9]+)+)/i;
    return regex.test(input);
}



const checkFunction = () => {
   if (userInput.value == "") {
    alert("Please provide a phone number");
  } else if (useRegex(userInput.value)) {
    results.textContent = `Valid US number: ${userInput.value}`
  } else {
    return results.textContent = `Invalid US number: ${userInput.value}`;
  }
};

const clearFunction = () => {
      results.textContent = "";
};





checkBtn.addEventListener("click", checkFunction);


clearBtn.addEventListener("click", clearFunction);

console.log(useRegex(userInput.value));