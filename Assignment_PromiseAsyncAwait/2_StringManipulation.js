// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console.

function manipulatedString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString)
}

function callback(manipulatedString) {
    console.log(`The manipulated string is ${manipulatedString}`)
}

manipulatedString("Hello, world!", callback)