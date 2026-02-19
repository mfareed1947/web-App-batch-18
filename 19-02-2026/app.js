var target = document.childNodes[1].childNodes[2].childNodes[1].parentNode.parentNode;

console.log(target)


// var parentEle = document.getElementsByTagName('div')[0].childNodes[1]

// console.log(parentEle.nextElementSibling.nextElementSibling)

// console.log(parentEle.innerText)

// hasAttribute
// getAttribute
// setAttribute

// var para = document.getElementsByTagName('p')[1];


// console.log(para.hasAttribute('id'))
// console.log(para.getAttribute('id'))
// console.log(para.setAttribute('class', 'para'))
// console.log(para.getAttribute('class'))

// console.log(para.attributes)


var container = document.getElementById('container');

var newPara = document.createElement('p');

newPara.innerText = 'This is a new para added from JS !';

container.appendChild(newPara);

console.log(newPara.innerText)