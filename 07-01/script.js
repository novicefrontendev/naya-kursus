const elementTitle = document.getElementById('title');
const elementParagraph = document.getElementsByTagName('p');
const elementContent = document.getElementsByClassName('content-1');
const elementBoldBlu = document.querySelector('.bold-blue');
const elementBold = document.querySelectorAll('.content-1');
const elementButton = document.getElementsByTagName('button')

console.log(elementTitle);
console.log(elementParagraph);
console.log(elementContent);
console.log(elementBoldBlue);
console.log(elementBold);

console.log(elementButton.length <= 0)

// Soal No. 1
// if (elementButton.length !=0) {
//     console.log(elementButton)
// } else {
//     throw 'Elemen Kosong'
// }


// if (elementTitle.length !=0) {
//     console.log(elementTitle)
// } else {
//     throw 'Elemen Kosong'
// }

// Soal No. 2 -> Metode 1
let num1 = Number(document.querySelector('.angka1').innerText);
let num2 = Number(document.querySelector('.angka2').innerText);
let num3 = Number(document.querySelector('.angka3').innerText);
let num4 = Number(document.querySelector('.angka4').innerText);
let num5 = Number(document.querySelector('.angka5').innerText);;
let sumNum = num1 + num2 + num3 + num4 + num5

console.log(sumNum);


// Soal No. 2 -> Metode 2
const elementsList = document.getElementById('angka').innerText.split('\n').map(Number);
const listsArray = (Array.from(elementsList));

console.log(listsArray)

// Creating variable to store the sum
var sum = 0;
     
// Running the for loop
for (let i = 0; i < listsArray.length; i++) {
    sum += listsArray[i];
}

console.log("Sum is " + sum)