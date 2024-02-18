
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
// Question NO 5


 var score1 = prompt("Entre score 1.");
 var score2 = prompt("Entre score 2.");
 var score3 = prompt("Entre score 3.");

 var studentScore = [];
 var scoredPushed = studentScore.push(score1, score2, score3);
var scoreSorted = studentScore.sort();

alert(studentScore);

// Question No 6


 var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<select>");
 for (var i = 0; i < phoneManufacturers.length; i++) {
     document.write("<option>" + phoneManufacturers[i] + "</option>");

 }
 
// Question No 7

 var userTable = prompt("Enter Table Number.");
 var tableLength = prompt("Enter Table Length.", 10);

 for(var i= 1; i <= tableLength; i++)


 {

     document.write(userTable + " x " + i + " = " + (userTable*i) + "<br>")

 }
// Question No 10


 var userText = prompt("Enter a word in capital latters")
 var lowerText = userText.toLowerCase()

 alert(userText + " = " + lowerText)


 // Question NO 11


 var userText = prompt("Enter a word in small letters.");
 var upperText = userText.toUpperCase();

 alert(userText + " = " + upperText);


// Question NO 12

 var usreNum = prompt("Enter a number.");

 var userType;
 if (usreNum % 1 == 0) {
    userType = Number(usreNum);

 }
 else {
    userType = usreNum
}

alert("The Type Of " + usreNum+ " is: " + typeof userType);