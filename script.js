const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");



const checkFunction = () => {
   if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (useRegex) {
    results.textContent = `Valid US number ${userInput.value}`
  }
};

const clearFunction = () => {
      results.textContent = "";
};

const useRegex = (input) => {
    let regex = /1 ([0-9]+(-[0-9]+)+)/i;
    return regex.test(input);

}

// const validFunction = () => {
//     if (useRegex()) {
//      results.textContent = `Valid US number $      {userInput.value}`
//         }
// }




checkBtn.addEventListener("click", checkFunction);


clearBtn.addEventListener("click", clearFunction);

