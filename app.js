
// Question No 1:
var storepass = "@banoqabil113";
var userPassword = prompt("Enter your password:");

if (userPassword) {
    alert("Please enter your password");

} else if (userPassword === storepass) {
    alert("Correct Password!");
} else {
    alert("Incorrect password");
}

// Question No 2:

var greeting;
var hour = 13;

if (hour < 18)
 {
    greeting = "Good day";
}
 else {
    greeting = "Good Evening";
}

// Question No 3:
// a

var JSliteral = [];

// b

var   JSobject = new Array();

// c

var stringsArray = ["apple", "banana", "mango"];

// d

var numbersArray = [1, 2, 3, ];

// e

var booleanArray = [ false, true];

// f

var mixedArray = ["mango", 1, true];

// g

var edu_Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "BBA", "MS", "M. Phil.", "PhD"];

// Question 5:

function sortScores(scores) {
    scores.sort((a, b) => a - b);
    return scores;
}

// Function to handle the main program logic
function main() {
    // Initialize the scores array
    let scores = [85, 90, 78, 92, 88];

    // Display the original scores
    console.log("Original Scores:");
    displayScores(scores);

    // Sort the scores
    let sortedScores = sortScores(scores);

    // Display the sorted scores
    console.log("\nSorted Scores:");
    displayScores(sortedScores);
}
