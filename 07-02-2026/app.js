// var dayOfWeek = "Mon";

// switch (dayOfWeek) {
//   case "Sat":
//     console.log("It's Saturday! Time to relax.");
//     break;

//   case "Sun":
//     console.log("It's Sunday! Enjoy your day off.");
//     break;

//   case "Mon":
//     console.log("It's Monday! Back to work.");
//     break;
    
//    default:
//     console.log("Krlo kch kam !")
// }


// function greet(name){
//     alert("Hello, " + name + ", welcome to our website!");
// }

function onMouseOver(element) {
    console.log(element)

    element.src = 'https://cdn.prod.website-files.com/66da09ee919601fcdef82d9a/677c0acdc8b03e4b5f0ef729_672b41dfeaf34f072710a973_New_Ferrari_V12_ext_02_red_media.webp';

    element.style.width = '500px';
    element.style.height = '300px';
}

function onMouseOut(element) {
    element.src = 'https://www.amalgamcollection.com/cdn/shop/files/Wideedit_44fe4a82-c08b-449e-87e3-5380099e6329_2000x850_crop_center.jpg?v=1706017250';
}