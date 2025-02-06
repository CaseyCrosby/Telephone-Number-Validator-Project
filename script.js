const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


/****************************************************
const useValidRegex = () => {
    let regex = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/;
    return regex.test(userInput.value);
}
*****************************************************/
const input = userInput.value

const userFunction = (input) => {
    const regex = /[\D_]/g;
    const newInput = input.replace(regex, '');
    return newInput;
}

const validRegex = () => {
    const regex = /[1]*[/d]{3}[\d]{3}[\d]{4}/;
    return regex.test(userFunction);
}



const checkFunction = (input) => {
   if (input === "") {
    alert("Please provide a phone number");
  } else if (validRegex() == true) {
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

console.log(userFunction(input));
console.log(validRegex())
// 1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?
