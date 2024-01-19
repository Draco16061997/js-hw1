// Запросить у пользователя число и вывести все делители этого числа.


let n = parseInt(prompt("entet num"))




if (!isNaN(n)){
    for (let i =1; i <= n; i++){
        if (n % i === 0){
            console.log(i)
        }
    }
}
else{
    console.error(" incorect number!!!")
}
