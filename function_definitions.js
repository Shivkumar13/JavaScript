function addNumbers(num1, num2) {
    return num1 * num2;
}
console.log(addNumbers(4, 5))

// addNums() function
const addNums = (num1 = 1, num2 = 111) => {
    return (num1 + num2)
}
console.log(addNums());

//Another method for writing the function
const subNums = (num1, num2) => num1 - num2;
console.log(subNums(45, 34));

//writing console.log() on the same line as fat arrow
const helloWorld = (num1, num2) => console.log(num1 + num2);
helloWorld(12, 34);
