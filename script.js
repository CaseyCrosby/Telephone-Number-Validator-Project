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

/****************************************************
const userFunction = () => {
    const regex = /[\D_]/g;
    const alt = userInput.value.replace(regex, '');
    return alt;
}
****************************************************/

const validRegex = () => {
const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
    return phoneRegex.test(userInput.value);
  }


const checkFunction = () => {
   if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  } else if (validRegex() == true) {
    results.textContent = `Valid US number: ${userInput.value}`
  } else {
    return results.textContent = `Invalid US number: ${userInput.value}`;
  } 
};

const clearFunction = () => {
      results.textContent = "";
};

checkBtn.addEventListener("click", () => {
    checkFunction();
    userInput.value = "";
});


clearBtn.addEventListener("click", () => {
    clearFunction();
});
