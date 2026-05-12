// setTimeout(()=>{
//     console.log("Set Timeout after 3 seconds")
// }, 3000)



// setTimeout(()=>{
//     console.log("Set Timeout after 2 seconds")
// }, 2000)



// setTimeout(()=>{
//     console.log("Set Timeout after 1 second")
// }, 1000)



// setTimeout(()=>{
//     console.log("Set Timeout after 0 seconds")
// })

// x()
// y()

// function x(){
//     console.log("Function x is called")
// }

// function y(){
//     console.log("Function y is called")
// }
// function infiniteLoop(){
//     let i = 0
//     while(i < 1000000){
//         console.log("Infinite Loop", i)
//     }

//     i++;
// }


// const loopBtn = document.querySelector("#loopBtn")

// loopBtn.addEventListener("click", infiniteLoop)

// const btn = document.querySelector("#clickBtn")

//     btn.addEventListener("click", ()=>{
//     console.log("Button clicked")
// })

// setTimeout(()=>{
//     console.log("Set Timeout after 3 seconds")
// }, 3000)

// HIGHER ORDER FUNCTIONS

// Calculate area formula :  Math.PI * radius * radius
// Calculate circumference formula :  2 * Math.PI * radius
// Calculate diameter formula :  2 * radius

// Calculate the area from radius

// DRY - Don't Repeat Yourself

const radius = [1, 3, 4, 5]

// function calculateArea(radius){
//     let output = []

//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// console.log(calculateArea(radius))


// function calculateCircumference(radius){
//     let output = []

//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output;
// }

// console.log(calculateCircumference(radius))

// function calculateDiameter(radius){
//     let output = [] 

//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     return output;
// }

// console.log(calculateDiameter(radius))

function area(radius){
    return Math.PI * radius * radius
}

function circumference(radius){
    return 2 * Math.PI * radius
}

function diameter(radius){
    return 2 * radius
}

// function calculate(radius, logic){ 

//     let output = []

//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }

//     return output;
// }


const areaResults = radius.map(area)
const circumferenceResults = radius.map(circumference)
const diameterResults = radius.map(diameter)

console.log(areaResults)
console.log(circumferenceResults)
console.log(diameterResults)

console.log(
    "------------------------------"
)

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))


let arr = [1, 2, 3, 4, 5]

let newArr = arr.map((num)=>{
    return num * 2
})

console.log(newArr)


// MAP, FOR EACH, FILTER, REDUCE

// MAP - Returns a new array with the results of calling a provided function on every element in the calling array.
// FOR EACH - Executes a provided function once for each array element.
// FILTER - Creates a new array with all elements that pass the test implemented by the provided function.
// REDUCE - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.