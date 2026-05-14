// HIGHER ORDER FUNCTIONS

// Area = Math.PI * radius * radius;
// Circumference = 2 * Math.PI * radius;
// Diameter = 2 * radius;

const radius = [3, 1, 2, 4];

// function calculateArea(radius) {
//     let output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// function calculateCircumference(radius) {
//     let output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// function calculateDiameter(radius) {
//     let output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }


// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));

function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function diameter(radius) {
    return 2 * radius;
}


// function calculate(radius, logic) {
//     let output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }   
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));




// const areaResults = radius.map(area);
// const circumferenceResults = radius.map(circumference);
// const diameterResults = radius.map(diameter);

// console.log(areaResults);
// console.log(circumferenceResults);
// console.log(diameterResults);



// const num = [1, 2, 3, 4, 5];

// const double = num.map((item, index)=>{
//     console.log(`index: ${index} and item: ${item}`);
//     return item * 2;
// });

// const double = num.map(item=> item * 2);


// console.log(double);

// console.log(num);

const demiData = [
    {
        name: 'Ali',
        age: 24,
        job: 'Developer',
    },
    {
        name: 'Ahmer',  
        age: 30,
        job: 'Tester',
    },  
    {
        name: 'Ayesha',
        age: 28,
        job: 'Designer',
    },
];


// const names = demiData.map((item, index) => {
//     return item.name;
// });  
// const ages = demiData.map((item) => item.age);
// const jobs = demiData.map((item) => item.job);

// console.log(names);
// console.log(ages);
// console.log(jobs);


// FOR EACH


// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];


// fruits.forEach((item, index) => {
//     console.log(`index: ${index} and item: ${item}`);
// });


const numbers = [1, 2, 3, 4, 5];

const double = []

numbers.forEach((item, index) => {
    double.push(  item * 2 );
});

const filtered = double.filter((item) => item > 5);

console.log(numbers);
console.log(double);
console.log(filtered);