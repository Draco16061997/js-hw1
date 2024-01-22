// Вывести таблицу умножения для всех чисел от 2 до 9.
//  Каждое число необходимо умножить на числа от 1 до 10.


let i = 1
let j = 2 



while(j < 10){
    i++
    
    console.log(j+" x "+i+" = " + parseInt(i)*parseInt(j))
    if (i > 9) {i = 1
    j++
    console.log("----------------------")
    }

    // console.log(j+" x "+i+" = " + parseInt(i)*parseInt(j))

    
}