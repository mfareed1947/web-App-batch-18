function expandText(textId) {
    var expandedText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus magnam. Voluptas, voluptate! Doloribus, magnam. Voluptas, voluptate! Doloribus, magnam.";

    var textElement = document.getElementById(textId);

    // console.log(textElement);
  
    textElement.innerText = expandedText;
}


// function makeInvisible() {
//     var imgElem = document.getElementById("image");
//     imgElem.className = "hidden";

// }

// function makeVisible() {
//     var imgElem = document.getElementById("image");
//     imgElem.className = "";
// }

// function makebig(){
//     var imgElem = document.getElementById("image");
//     imgElem.className += " big";
// }


// function swapImageOver(){
//         var imgElem = document.getElementById("image");

//         imgElem.src = "https://cdn.prod.website-files.com/66da09ee919601fcdef82d9a/677c0acdc8b03e4b5f0ef729_672b41dfeaf34f072710a973_New_Ferrari_V12_ext_02_red_media.webp";
//     }

// function swapImageOut(){
//     var imgElem = document.getElementById("image");

//     imgElem.src = "https://www.autowin.es/cdn/shop/articles/daily-car-news-2026-02-10.webp?v=1770705160&width=1920";
// }


var allparagraphs = document.getElementsByTagName("p");

// console.log(allparagraphs[0].style.backgroundColor = "aqua");


for(var i=0; i<allparagraphs.length; i++){
    allparagraphs[i].style.backgroundColor = "aqua";
}