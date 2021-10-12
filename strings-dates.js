/* What day is it?!? */
const currentDate = new Date();

// console.log('getDate() ->', currentDate.getDate());
// console.log('getDay() ->', currentDate.getDay());
// console.log('getFullYear() ->', currentDate.getFullYear());
// console.log('getHours() ->', currentDate.getHours());
// console.log('getMilliseconds() ->', currentDate.getMilliseconds());
// console.log('getMinutes() ->', currentDate.getMinutes());
// console.log('getMonth() ->', currentDate.getMonth());
// console.log('getSeconds() ->', currentDate.getSeconds());
// console.log('getTime() ->', currentDate.getTime());
// console.log('getTimezoneOffset() ->', currentDate.getTimezoneOffset());
// console.log('toDateString() ->', currentDate.toDateString());
// console.log('toISOString() ->', currentDate.toISOString());
// console.log('toLocaleDateString() ->', currentDate.toLocaleDateString());
// console.log('toLocaleString() ->', currentDate.toLocaleString());
// console.log('toLocaleTimeString() ->', currentDate.toLocaleTimeString());
// console.log('toString() ->', currentDate.toString());
// console.log('toTimeString() ->', currentDate.toTimeString());
// console.log('valueOf() ->', currentDate.valueOf());

/* Output to DOM */
// Find target elements and assign them to a variable
const dateElement = document.querySelector('.date'); // class selector
const getDay = currentDate.getDate();
// console.log(getDay);
// Display day date as content of the target element
dateElement.textContent = currentDate.toString();
const getTime = currentDate.getHours();
// console.log(getTime);
const getMinutes = currentDate.getMinutes();
// console.log(getMinutes);
const month = currentDate.toString()
const currentMonth = month.substr(4,3)
// console.log(currentMonth);
// console.log(getMonth);

// String
//const string = 'Harry Potter is the Bomb!'
console.log(`You last accessed this page on ${currentMonth} ${getDay} at ${getTime}:${getMinutes}`)

dateElement.textContent = `You last accessed this page on ${currentMonth} ${getDay} at ${getTime}:${getMinutes}`

// const paraElement = document.querySelector('p')



//writing to the page
const numCharacters = document.querySelector(.characters)
numCharacters.querySelector('span').textContent = //enter number for characters
const numWords = document.querySelector(.words)
numWords.querySelector('span').textContent = //enter number for characters
const numWizards = document.querySelector(.wizards)
numWizards.querySelector('span').textContent = //enter number for characters