// // Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести 
// результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).


let string = prompt("enter nums ")
let nums = parseInt(prompt("enter sdvig"))
string = parseInt(string)

let ar = []


if(!isNaN(string) && !isNaN(nums)){
    string = string.toString();
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++){
        if(i+nums >= arr.length){
            ar.push(arr[i+nums - arr.length])
}
    else{ar.push(arr[i+nums])}
}}
else{console.error("введи цыфри !!!")}

console.log(ar.join(''))