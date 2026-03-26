// console.log(globalThis)

// '===================='

// console.log(window)

// var btn = document.getElementById('reload')

// btn.addEventListener('click', function () {
// window.location.reload(true)
// window.location.assign('https://lms.saylanimit.com/login')

// history.back()

// window.open()


//     var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars < br > named the Order of Friars Minor Capuchin who wear < br > brown robes with large hoods covering their heads.</p >  <button onclick='window.close()'>Close Window</button>";
//     var monkeyWindow = window.open(
//         "http://www.google.com",
//         "monkeyWindow",
//         "width=400,height=400,scrollbars=yes"
//     )
//     monkeyWindow.document.write(windowContent)
// })


// Get browswer widht and height 

// window.addEventListener('resize', function () {
// console.log('Browser width: ' + window.innerWidth)
// console.log('Browser height: ' + window.innerHeight)

//     if (window.innerWidth < 600) {
//     console.log('You are using a mobile device')
// }

// if (window.innerWidth >= 600 && window.innerWidth < 1024) {
//     console.log('You are using a tablet device')
// }
// })


// function checkForSelection() {
//     if (document.getElementById("states").selectedIndex === 0) {
//         alert("Please select a state.");
//         return false;
//     }
// }


// function validateRadios() {
//     var radios = document.getElementsByName("courses");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }
//     alert("Please check one.");
//     return false;
// }

try {
    if(true){
        throw new Error("Kch bhi !")
    }

} catch (error) {
    console.log("WINDOW TERMINAL MEI NH HOTA BHAI :)", error.message)
}


console.log("HELLO WORLD !")