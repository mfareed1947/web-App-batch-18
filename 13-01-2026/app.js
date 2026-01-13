// // Polished generateTable UI logic
// (function(){
//     function generateTable(){
//         const numEl = document.getElementById('tableNum');
//         const limitEl = document.getElementById('tableLimit');
//         const body = document.getElementById('tableBody');
//         const wrapper = document.getElementById('tableWrapper');

//         const num = Number(numEl.value);
//         const limit = Number(limitEl.value === '' ? NaN : Number(limitEl.value));

//         body.innerHTML = '';

//         // Improved validation: ensure inputs are not empty and limit >= 1
//         if (numEl.value.trim() === '' || limitEl.value.trim() === '' || !Number.isFinite(num) || !Number.isFinite(limit) || limit < 1){
//             alert('Please enter valid numbers (limit >= 1)');
//             wrapper.style.display = 'none';
//             return;
//         }

//         for (let i = 1; i <= limit; i++){
//             const row = document.createElement('tr');
//             row.style.setProperty('--i', i);
//             row.innerHTML = `
//                 <td>${num}</td>
//                 <td>&times;</td>
//                 <td>${i}</td>
//                 <td>=</td>
//                 <td>${num * i}</td>
//             `;
//             body.appendChild(row);
//         }

//         // show wrapper explicitly
//         wrapper.style.display = 'block';
//         document.getElementById('mathTable').setAttribute('aria-hidden','false');
//     }

//     document.addEventListener('DOMContentLoaded', ()=>{
//         const btn = document.getElementById('generateBtn');
//         btn.addEventListener('click', generateTable);

//         // allow Enter to generate when inputs focused
//         ['tableNum','tableLimit'].forEach(id=>{
//             const el = document.getElementById(id);
//             el.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') generateTable(); });
//         });

//         // expose for inline use if needed
//         window.generateTable = generateTable;
//     });
// })();





var fruits = ['apple', 'banana', 'cherry', 'date', 'pineapple', 'grape', 'kiwi', 'mango'];

// fruits.splice(2,0, 'blueberry', 'blackberry');

// console.log(fruits);

// var slicedFruits = fruits.slice(1, 4);
// slicedFruits.push('mango');
// console.log("Sliced fruits:", slicedFruits);

// console.log('====================================');
// console.log("Original fruits:",     fruits);
// console.log('====================================');

// var table = Number(prompt("Enter the multiplication table you want:"));

// var tableLength = Number(prompt("Enter the length of the multiplication table:"));

// for(var i = 1; i <= tableLength; i++) {
//    console.log(table + " X " + i + " = " + table * i);
// }


var findFruit = prompt("Enter the fruit you want to find:").toLowerCase()

for(var i = 0; i < fruits.length; i++) {
 if(fruits[i].toLowerCase() === findFruit) {
     console.log("Found " + findFruit + " at index " + i);
     break;
    
 }else{
     console.log(fruits[i]);
 }

}
