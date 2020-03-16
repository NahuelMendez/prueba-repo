"use strict";

let date = new Date();
let formatDate = date.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');