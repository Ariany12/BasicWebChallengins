
let number = [700, 800, 900];

function ConverttoDollar(k) {

number.push(k);
console.log(number);
return (k/141.28);

}
document.getElementById("demo").innerHTML = ConverttoDollar(150);
document.getElementById("demo").innerHTML = ConverttoDollar(300);
document.getElementById("demo").innerHTML = ConverttoDollar(450);
document.getElementById("demo").innerHTML = ConverttoDollar(600);

