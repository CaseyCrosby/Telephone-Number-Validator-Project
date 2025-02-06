const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");



const checkFunction = () => {
   if (userInput.value === "") {
    alert("Please provide a phone number");
  } 
};

const clearFunction = () => {
     return results.value = "";
};






checkBtn.addEventListener("click", checkFunction);


clearBtn.addEventListener("click", clearFunction);