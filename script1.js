// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let a = prompt("entet num 1 ")
let b = prompt("enter num 2")
let sum = 0;

if (b > a){
for (let i = a; i < b; i++){
    sum += parseInt(i);
}}
else{console.error("сначала меньшее число потом большое ")}

console.log("Сумма диапазона "+ sum)