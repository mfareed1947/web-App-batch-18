function onMouseOver(element) {
    element.src = 'https://carconfigurator.ferrari.com/rt-assets/data/cars/849testarossaspider/ui/splashpage.jpg';

    element.style.width = '600px';
    element.style.height = '400px';
    element.style.transition = 'width 0.5s, height 0.5s';
    element.style.borderRadius = '20px';
}

function onMouseOut(element) {
    element.src = 'https://cdn.prod.website-files.com/66da09ee919601fcdef82d9a/677c0acdc8b03e4b5f0ef729_672b41dfeaf34f072710a973_New_Ferrari_V12_ext_02_red_media.webp';

    element.style.width = '500px';
    element.style.height = '300px';
    element.style.transition = 'width 0.5s, height 0.5s';
    element.style.borderRadius = '0px';
}


function onInputFocus(element) {
    element.style.backgroundColor = 'lightblue'; 
    element.style.color = 'blue';
    element.style.transition = 'background-color 0.5s, color 0.5s';
    element.style.fontSize = '18px';
    element.style.fontWeight = 'bold';
    element.style.border = '2px solid blue';

}

function onInputBlur(element) { 
    element.style.backgroundColor = 'white'; 
    element.style.color = 'black';
     element.style.transition = 'background-color 0.5s, color 0.5s';
    element.style.fontSize = '16px';
    element.style.fontWeight = 'lighter';
    element.style.border = '2px solid black';
}


// function onFormSubmit(emailId, passwordId){

//     var email = document.getElementById(emailId)
//     var password = document.getElementById(passwordId)


//     console.log("Email: " + email.value);
//     console.log("Password: " + password.value);

//     if(email.value === "ali@gmail.com" && password.value === "123456"){
//         alert("Login Successful!");
//     } else {
//         alert("Invalid email or password!");
//     }

//     email.value = "";
//     password.value = "";

    
// }


// function togglePasswordVisibility(passwordId) {
//     var passwordInput = document.getElementById(passwordId);
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//     } else {
//         passwordInput.type = "password";
//     }
// }    


function expandText(element){

}