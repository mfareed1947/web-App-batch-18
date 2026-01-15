// For Loop

// var table = +prompt("Enter the multiplication table you want:");
// var tableLength = +prompt("Enter the length of the table:");

// for(var i = 1; i <= tableLength; i++){
//     console.log(`${table} X ${i} = ${table * i}`);

// }

// const fruits = ["Mango", "Apple", "Banana", "Orange", "Pineapple"];

// var findFruit = prompt("Enter the fruit you want to search:").toLowerCase();

// for (var i = 0; i < fruits.length; i++) {
//   if (fruits[i].toLowerCase() === findFruit) {
//     console.log(`${findFruit} is available at index ${i} in our bakery`);
//     break;
//   } else {
//     console.log(
//       `${fruits[i]} We are sorry. ${findFruit} is not available in our bakery`
//     );
//   }
// };

// var guests = ["Ali", "Ahmed", "Waqar", "Hasan", "Omar"];

// for (var i = 0; i < guests.length; i++) {
//     if(i === 2){
//         continue;
//     }
//     console.log(guests[i] + ", you are cordially invited to dinner at my place this Saturday.");
// }


//! While Loop
// const fruits = ["Mango", "Apple", "Banana", "Orange", "Pineapple"];


// var i = 0;
// while(i < fruits.length){
//     console.log(fruits[i]);

//     i++;
// }


// var table = +prompt("Enter the multiplication table you want:");
// var tableLength = +prompt("Enter the length of the table:");

// var i = 1;
// while(i <= tableLength){
//     console.log(`${table} X ${i} = ${table * i}`);

//     i++;
// }



// DO while Loop

var i = 1;

do{
    console.log("This will run at least once", i);

    i++;

    if(i > 5){
        break;
    }
}while(true)