
// Assign myValue the value of "Hello, how's it going?"
let myValue = "Hello, how's it going?";
// 2) Declare a variable named myCharacter.
let myCharacter = myValue;
// Use the charAt() method to get the letter t
let myLetter = myCharacter.charAt(15);
// from the variable myValue and assign it to
// a variable named myLetter.
// The variable myCharacter should hold the value
// that you pass to the charAt() method 
// 3) Use the indexOf() method to get the position
// of "going" from the variable myValue and assign it
// to a variable named goingPosition.
let goingPosition = indexOf("going");
// 4) Use the slice() method to get "how's it going?"
// from the variable myValue and assign it a variable
// named mySlice.
let mySlice = myValue.slice("how's it going?");
// 5) Declare a variable named myOtherValue.
// Assign myOtherValue the value of "Ok?"
// Declare a variable named myThirdValue.
// Set the value of myThirdValue by using
// the concat() method on the variable myValue
// to concatenate myValue and myOtherValue.
// Specify a space as the first parameter of concat()
let myOtherValue = "Ok?";
let myThirdValue;
myThirdValue = myValue.concat(" ": myValue:myOtherValue);
// 6) Declare a variable named myRandom
// Assign myRandom a non-rounded value from 0 to 1 using Math.random()
let myRandom = Math.random(0-1);
// 7) Now assign a random value from 1 to 10 to myOtherRandom
// Use Math.floor() and Math.random() to accomplish this
let myOtherRandom = Math.floor(Math.random()*10);
// 8) Assign the length of the variable myValue to a
// variable named myLength.
let myLength = myValue.length;
// 9) Declare a variable named myCase and assign it the
// value "aLpHaBeT". Set the contents of the variable
// to all lowercase. Find the method to do this on your own.
let myCase = "aLpHaBeT";
myCase.toLowerCase;
// 10) **Solving a problem!
// Declare a variable named myName and assign it your first name.
// Utilize the length property, Math.floor(), Math.random() and charAt()
// methods to write one line of code that will randomly assign a character
// from your first name to a variable called myNameLetter.
// Refer to the examples of each method at MDN Web Docs.
let myName =  "Haylee"
let myNameLetter = myName.charAt(Math.floor(Math.random()*myName.length));
