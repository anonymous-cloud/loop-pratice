//  Write a JavaScript program that 
//displays the largest integer among two 
//integers.

function displayLargerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`The larger number is: ${num1}`);
    } else if (num2 > num1) {
        console.log(`The larger number is: ${num2}`);
    } else {
        console.log("Both numbers are equal.");
    }
}