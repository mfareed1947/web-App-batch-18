// var text = "Hello, JavaScript!".toLowerCase();

// var textFromUser = prompt("Enter text to find:").toLowerCase();

// var findText = text.indexOf(textFromUser); //

// if(findText === -1) {
//     alert("Text not found!");
// }else{
//     alert("Text found at index: " + findText);
// }

// var extractText = text.slice(findText, findText + 5)

// console.log(extractText);
var text = "During World War II, many significant events took place. The impact of World War II is still felt today.";

// console.log(text.length);
// console.log(text.lastIndexOf("World War II"));

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// }
// console.log(text);

// var replaceText = text.replaceAll("World War II", "the Second World War");
// var replaceText = text.replace("World War II", "the Second World War");
// var replaceText = text.replace(/World War II/g, "the Second World War");

// console.log(replaceText);

// var fullName = "SAMI AHMED";

// console.log(fullName.charAt(fullName.length - 1).toUpperCase() );


var num = 2.0;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

var randomNum = Math.floor(Math.random() * 10) + 1
// console.log('====================================');
// console.log(randomNum);
// console.log('====================================');

// for(var i = 0; i < 100; i++) {
//     var randomNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNum);
// }

var guessNum = +prompt("Guess a number between 1 and 10:");

if(guessNum < randomNum) {
    alert("Too low! The number was " + randomNum);
}else if(guessNum > randomNum) {
    alert("Too high! The number was " + randomNum);
}else{
    alert("Congratulations! You guessed the number " + randomNum);
}

var ok = confirm("Do you want to play again?");
console.log(ok);

if(ok){
    window.location.reload();
}