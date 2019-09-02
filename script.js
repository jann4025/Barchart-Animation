'use strict'


document.addEventListener('DOMContentLoaded', start);

function start() {
    console.log('Connection between the DOM and the Script was successfull! Nice 😎');
    let number;
    const array = ["20", "10", "24", "25", "32", "34", "21", "20", "10", "24", "25", "32", "34", "21", "20", "10", "24", "25", "32", "34", "21", "20", "10", "24", "25", "32", "34", "21", "10", "24", "25", "32", "34", "21", "20", "10", "24", "25", "32", "34"];
    document.querySelectorAll(".bar").forEach((bar, i) => {
        bar.style.height = array[i] + "vh";
    });
    setInterval(function () {
        number = Math.floor(Math.random() * 36);
        array.push(number);
        console.clear();
        console.log(array);
        if (array.length > 40) {
            array.shift();
        }
        document.querySelectorAll(".bar").forEach((bar, i) => {
            bar.style.height = array[i] + "vh";
        });

    }, 200);




}